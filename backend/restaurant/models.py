from django.core.validators import FileExtensionValidator, URLValidator
from django.db import models


def validate_file_size(value):
    limit = 10 * 1024 * 1024  # 10 MB
    if value.size > limit:
        raise ValueError("File size must not exceed 10 MB.")


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
    pdf_file = models.FileField(
        upload_to='menus/pdf/',
        validators=[
            FileExtensionValidator(allowed_extensions=['pdf']),
            validate_file_size,
        ],
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Menu Upload"
        verbose_name_plural = "Menu Uploads"

    def __str__(self):
        return f"{self.title} - {self.updated_at.strftime('%Y-%m-%d')}"


class EventNews(models.Model):
    title = models.CharField(max_length=120)
    summary = models.TextField()
    badge = models.CharField(max_length=40, blank=True, default="Coming Up")
    event_date = models.DateField(blank=True, null=True, db_index=True)
    cta_label = models.CharField(max_length=40, blank=True)
    cta_url = models.CharField(
        max_length=255,
        blank=True,
        validators=[URLValidator()],
    )
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-event_date", "-updated_at"]
        verbose_name = "Event News"
        verbose_name_plural = "Event News"

    def __str__(self):
        return self.title


class RestaurantMenuSection(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True, db_index=True)

    class Meta:
        ordering = ["display_order", "title"]
        verbose_name = "Restaurant Menu Section"
        verbose_name_plural = "Restaurant Menu Sections"

    def __str__(self):
        return self.title


class RestaurantMenuItem(models.Model):
    section = models.ForeignKey(
        RestaurantMenuSection,
        on_delete=models.CASCADE,
        related_name="items",
    )
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    price = models.CharField(max_length=40)
    image_url = models.CharField(max_length=255, blank=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True, db_index=True)

    class Meta:
        ordering = ["display_order", "name"]
        verbose_name = "Restaurant Menu Item"
        verbose_name_plural = "Restaurant Menu Items"

    def __str__(self):
        return self.name


class HeroReview(models.Model):
    quote = models.TextField()
    attribution = models.CharField(max_length=80, default="Google Reviews")
    rating = models.PositiveSmallIntegerField(default=5)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-updated_at"]
        verbose_name = "Hero Review"
        verbose_name_plural = "Hero Reviews"

    def __str__(self):
        return f"{self.attribution}: {self.quote[:40]}"
