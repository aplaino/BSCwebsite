from django.contrib import admin
from .models import CateringRequest, ContactInquiry

# Register your models here.
@admin.register(CateringRequest)
class CateringAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'event_date', 'service_type', 'is_processed')
    list_filter = ('service_type', 'is_processed', 'event_date')
    search_fields = ('full_name', 'email', 'company_name')
    # Organizes the detail view into sections
    fieldsets = (
        ('Contact Info', {
            'fields': ('full_name', 'email', 'phone', 'company_name')
        }),
        ('Event Details', {
            'fields': ('service_type', 'event_date', 'event_address', ('start_time', 'end_time'))
        }),
        ('Additional Info', {
            'fields': ('budget', 'notes', 'is_processed')
        }),
    )

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_replied')
    list_filter = ('is_replied', 'created_at')
    search_fields = ('name', 'email', 'message')