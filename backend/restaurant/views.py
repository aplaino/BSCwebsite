from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import CateringRequest, ContactInquiry


@api_view(['POST'])
def submit_catering(request):
    data = request.data
    
    try:
        # 1. Save to Database
        new_lead = CateringRequest.objects.create(
            full_name=data.get('fullName'),
            email=data.get('email'),
            phone=data.get('phone'),
            company_name=data.get('companyName'),
            service_type=data.get('serviceType'),
            event_date=data.get('eventDate'),
            event_address=data.get('eventAddress'),
            start_time=data.get('startTime'),
            end_time=data.get('endTime'),
            budget=data.get('budget'),
            notes=data.get('notes')
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
            ['owner-email@example.com'], # The restaurant owner's inbox
            fail_silently=False,
        )

        return Response({"message": "Inquiry sent! Check your email."}, status=201)

    except Exception as e:
        return Response({"error": str(e)}, status=400)


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
    except Exception as e:
        return Response({"error": str(e)}, status=400)