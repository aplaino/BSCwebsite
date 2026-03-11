import logging

from django.conf import settings
from django.db.models import Prefetch
from django.db.utils import OperationalError, ProgrammingError
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    CateringRequest,
    ContactInquiry,
    EventNews,
    FoodTruckMenu,
    RestaurantMenuItem,
    RestaurantMenuSection,
)

logger = logging.getLogger(__name__)


@api_view(['POST'])
def submit_catering(request):
    data = request.data
    
    try:
        # 1. Save to Database
        new_lead = CateringRequest.objects.create(
            full_name=data.get('fullName', 'N/A'), # Default to 'N/A' if missing
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            company_name=data.get('companyName', ''),
            service_type=data.get('serviceType', 'FOOD_TRUCK'),
            event_date=data.get('eventDate') or None, # If string is empty, send None
            event_address=data.get('eventAddress', ''),
            start_time=data.get('startTime') or None,
            end_time=data.get('endTime') or None,
            budget=data.get('budget', ''),
            notes=data.get('notes', '')
        )

        # 2. Construct the Email Content
        subject = f"New Catering Lead: {new_lead.full_name}"
        message = f"""
        You have a new catering inquiry!
        
        CONTACT INFO:
        Name: {new_lead.full_name}
        Email: {new_lead.email}
        Phone: {new_lead.phone}
        Company: {new_lead.company_name or 'N/A'}
        
        EVENT DETAILS:
        Type: {new_lead.get_service_type_display()}
        Date: {new_lead.event_date}
        Location: {new_lead.event_address}
        Time: {new_lead.start_time} to {new_lead.end_time}
        Budget: {new_lead.budget or 'Not specified'}
        
        NOTES:
        {new_lead.notes}
        """

        # 3. Send the Email
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['bustersheadoffice@gmail.com'], # The restaurant owner's inbox
            fail_silently=False,
        )

        return Response({"message": "Inquiry sent! Check your email."}, status=201)

    except Exception:
        logger.exception("Failed to handle catering submission")
        return Response(
            {"error": "Unable to submit catering inquiry right now."},
            status=400,
        )


@api_view(['POST'])
def submit_contact(request):
    data = request.data
    try:
        # 1. Save to Database
        inquiry = ContactInquiry.objects.create(
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            message=data.get('message')
        )

        # 2. Construct Email content
        subject = f"New Website Inquiry: {inquiry.name}"
        email_message = f"""
        New message from the Buster's Sea Cove website:
        
        Name: {inquiry.name}
        Email: {inquiry.email}
        Phone: {inquiry.phone}
        
        Message:
        {inquiry.message}
        """

        # 3. Send Email
        send_mail(
            subject,
            email_message,
            settings.DEFAULT_FROM_EMAIL,
            ['bustersheadoffice@gmail.com'], # Sent to the address from your React code
            fail_silently=False,
        )

        return Response({"message": "Message sent successfully!"}, status=201)
    except Exception:
        logger.exception("Failed to handle contact submission")
        return Response(
            {"error": "Unable to submit contact request right now."},
            status=400,
        )

@api_view(['GET'])
def get_food_truck_menu(request):
    # Grab the latest menu entry
    menu = FoodTruckMenu.objects.order_by('-updated_at').first()
    
    if menu:
        data = [{
            "id": menu.id,
            "title": menu.title,
            # This builds the full http://127.0.0.1:8000/media/... URL
            "pdf_file": request.build_absolute_uri(menu.pdf_file.url),
            "updated_at": menu.updated_at
        }]
        return JsonResponse(data, safe=False)
    
    return JsonResponse([], safe=False)


@api_view(['GET'])
def get_event_news(request):
    try:
        story = EventNews.objects.filter(is_active=True).order_by('-event_date', '-updated_at').first()
    except (OperationalError, ProgrammingError):
        logger.exception("Event news table is unavailable")
        return JsonResponse({}, safe=False)

    if not story:
        return JsonResponse({}, safe=False)

    data = {
        "id": story.id,
        "title": story.title,
        "summary": story.summary,
        "badge": story.badge,
        "event_date": story.event_date.isoformat() if story.event_date else None,
        "cta_label": story.cta_label,
        "cta_url": story.cta_url,
    }
    return JsonResponse(data)


@api_view(['GET'])
def get_restaurant_menu(request):
    try:
        sections = RestaurantMenuSection.objects.filter(is_active=True).prefetch_related(
            Prefetch(
                "items",
                queryset=RestaurantMenuItem.objects.filter(is_active=True).order_by("display_order", "name"),
            )
        ).order_by("display_order", "title")
    except (OperationalError, ProgrammingError):
        logger.exception("Restaurant menu tables are unavailable")
        return JsonResponse([], safe=False)

    data = [
        {
            "id": section.id,
            "title": section.title,
            "slug": section.slug,
            "items": [
                {
                    "id": item.id,
                    "name": item.name,
                    "description": item.description or None,
                    "price": item.price,
                    "imageUrl": item.image_url or None,
                }
                for item in section.items.all()
            ],
        }
        for section in sections
    ]
    return JsonResponse(data, safe=False)
