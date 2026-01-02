from django.db import models

# Create your models here.
from django.db import models

class CateringRequest(models.Model):
    SERVICE_OPTIONS = [
        ('FOOD_TRUCK', 'Food Truck'),
        ('DROP_OFF', 'Drop Off'),
        ('FULL_SERVICE', 'Full Service Drop Off'),
    ]

    # Contact Info
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company_name = models.CharField(max_length=255, blank=True, null=True)

    # Event Specifics
    service_type = models.CharField(max_length=50, choices=SERVICE_OPTIONS)
    event_date = models.DateField()
    event_address = models.CharField(max_length=500)
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    # Financials & Details
    budget = models.CharField(max_length=100, blank=True, null=True)
    notes = models.TextField(verbose_name="Tell Us More")

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    is_processed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name} - {self.event_date} ({self.get_service_type_display()})"
    
    
class ContactInquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    is_replied = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Contact Inquiries"

    def __str__(self):
        return f"Inquiry from {self.name} - {self.created_at.strftime('%Y-%m-%d')}"

class FoodTruckMenu(models.Model):
    title = models.CharField(max_length=100, default="Current Food Truck Menu")
    pdf_file = models.FileField(upload_to='menus/pdf/')
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.updated_at.strftime('%Y-%m-%d')}"