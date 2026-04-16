import logging

from django.conf import settings
from django.db.models import Prefetch
from django.db.utils import OperationalError, ProgrammingError
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.decorators import throttle_classes

from .models import (
    CateringRequest,
    ContactInquiry,
    EventNews,
    FoodTruckMenu,
    HeroReview,
    RestaurantMenuItem,
    RestaurantMenuSection,
)
from .serializers import CateringRequestSerializer, ContactInquirySerializer
from .throttles import CateringSubmissionThrottle, ContactSubmissionThrottle

logger = logging.getLogger(__name__)


_CATERING_KEY_MAP = {
    "fullName": "full_name",
    "companyName": "company_name",
    "serviceType": "service_type",
    "eventDate": "event_date",
    "eventAddress": "event_address",
    "startTime": "start_time",
    "endTime": "end_time",
}


def _normalize_catering_data(data: dict) -> dict:
    return {_CATERING_KEY_MAP.get(k, k): v for k, v in data.items()}


def _has_bot_honeypot(data) -> bool:
    return bool((data.get("website") or "").strip())


@api_view(['POST'])
@throttle_classes([CateringSubmissionThrottle])
def submit_catering(request):
    data = request.data

    if _has_bot_honeypot(data):
        return Response({"message": "Inquiry sent! Check your email."}, status=201)

    serializer = CateringRequestSerializer(data=_normalize_catering_data(data))
    if not serializer.is_valid():
        return Response({"error": "Invalid form data.", "details": serializer.errors}, status=400)

    new_lead = serializer.save()

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

    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.CONTACT_RECIPIENT_EMAIL],
            fail_silently=False,
        )
    except Exception:
        logger.exception("Failed to send catering notification email for lead %s", new_lead.pk)

    return Response({"message": "Inquiry sent! Check your email."}, status=201)


@api_view(['POST'])
@throttle_classes([ContactSubmissionThrottle])
def submit_contact(request):
    data = request.data

    if _has_bot_honeypot(data):
        return Response({"message": "Message sent successfully!"}, status=201)

    serializer = ContactInquirySerializer(data=data)
    if not serializer.is_valid():
        return Response({"error": "Invalid form data.", "details": serializer.errors}, status=400)

    inquiry = serializer.save()

    subject = f"New Website Inquiry: {inquiry.name}"
    email_message = f"""
    New message from the Buster's Sea Cove website:

    Name: {inquiry.name}
    Email: {inquiry.email}
    Phone: {inquiry.phone}

    Message:
    {inquiry.message}
    """

    try:
        send_mail(
            subject,
            email_message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.CONTACT_RECIPIENT_EMAIL],
            fail_silently=False,
        )
    except Exception:
        logger.exception("Failed to send contact notification email for inquiry %s", inquiry.pk)

    return Response({"message": "Message sent successfully!"}, status=201)


@api_view(['GET'])
def get_food_truck_menu(request):
    menu = FoodTruckMenu.objects.order_by('-updated_at').first()

    if menu:
        data = [{
            "id": menu.id,
            "title": menu.title,
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


@api_view(['GET'])
def get_hero_review(request):
    try:
        review = HeroReview.objects.filter(is_active=True).order_by("display_order", "-updated_at").first()
    except (OperationalError, ProgrammingError):
        logger.exception("Hero review table is unavailable")
        return JsonResponse({}, safe=False)

    if not review:
        return JsonResponse({}, safe=False)

    data = {
        "id": review.id,
        "quote": review.quote,
        "attribution": review.attribution,
        "rating": review.rating,
    }
    return JsonResponse(data)
