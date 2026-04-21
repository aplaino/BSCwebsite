from django.contrib import admin
from django.db.models import Count
from django.utils.html import format_html

from .models import (
    CateringRequest,
    ContactInquiry,
    EventNews,
    FoodTruckMenu,
    HeroReview,
    RestaurantMenuItem,
    RestaurantMenuSection,
)

admin.site.site_header = "Buster's Sea Cove Admin"
admin.site.site_title = "Buster's Admin"
admin.site.index_title = ""


@admin.action(description="Mark selected catering requests as processed")
def mark_requests_processed(modeladmin, request, queryset):
    queryset.update(is_processed=True)


@admin.action(description="Mark selected contact inquiries as replied")
def mark_inquiries_replied(modeladmin, request, queryset):
    queryset.update(is_replied=True)


@admin.action(description="Activate selected news posts")
def activate_news_posts(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected news posts")
def deactivate_news_posts(modeladmin, request, queryset):
    queryset.update(is_active=False)


@admin.action(description="Activate selected hero reviews")
def activate_hero_reviews(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected hero reviews")
def deactivate_hero_reviews(modeladmin, request, queryset):
    queryset.update(is_active=False)


@admin.action(description="Activate selected menu sections")
def activate_menu_sections(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected menu sections")
def deactivate_menu_sections(modeladmin, request, queryset):
    queryset.update(is_active=False)


@admin.action(description="Activate selected menu items")
def activate_menu_items(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected menu items")
def deactivate_menu_items(modeladmin, request, queryset):
    queryset.update(is_active=False)

@admin.register(CateringRequest)
class CateringAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'service_type', 'event_date', 'time_window', 'email', 'is_processed')
    list_filter = ('service_type', 'is_processed', 'event_date')
    search_fields = ('full_name', 'email', 'company_name', 'event_address', 'notes')
    list_editable = ('is_processed',)
    date_hierarchy = 'event_date'
    ordering = ('-event_date', '-created_at')
    readonly_fields = ('created_at',)
    actions = (mark_requests_processed,)
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
        ('Admin', {
            'fields': ('created_at',)
        }),
    )

    @admin.display(description='Event Time')
    def time_window(self, obj):
        return f"{obj.start_time} - {obj.end_time}"

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at', 'is_replied')
    list_filter = ('is_replied', 'created_at')
    search_fields = ('name', 'email', 'message')
    list_editable = ('is_replied',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
    actions = (mark_inquiries_replied,)
    fieldsets = (
        ('Inquiry', {
            'fields': ('name', 'email', 'phone', 'message')
        }),
        ('Admin', {
            'fields': ('is_replied', 'created_at')
        }),
    )

@admin.register(FoodTruckMenu)
class FoodTruckMenuAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at', 'menu_link')
    search_fields = ('title',)
    ordering = ('-updated_at',)
    readonly_fields = ('updated_at', 'menu_link')
    fieldsets = (
        ('Menu File', {
            'fields': ('title', 'pdf_url', 'pdf_file', 'menu_link')
        }),
        ('Admin', {
            'fields': ('updated_at',)
        }),
    )

    @admin.display(description='Current File')
    def menu_link(self, obj):
        if not obj.pk or not obj.pdf_file:
            return "Upload a PDF to preview it here."
        return format_html('<a href="{}" target="_blank">Open menu PDF</a>', obj.pdf_file.url)


@admin.register(EventNews)
class EventNewsAdmin(admin.ModelAdmin):
    list_display = ("title", "badge", "event_date", "cta_label", "is_active", "updated_at")
    list_filter = ("is_active", "event_date", "updated_at")
    search_fields = ("title", "summary", "badge")
    list_editable = ("is_active",)
    ordering = ("-event_date", "-updated_at")
    readonly_fields = ("created_at", "updated_at", "cta_preview")
    actions = (activate_news_posts, deactivate_news_posts)
    fieldsets = (
        ('Bubble Content', {
            'fields': ('title', 'badge', 'summary', 'event_date', 'is_active')
        }),
        ('Call To Action', {
            'fields': ('cta_label', 'cta_url', 'cta_preview')
        }),
        ('Admin', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    @admin.display(description='CTA Preview')
    def cta_preview(self, obj):
        if not obj.cta_url:
            return "Add a CTA URL to show a homepage action button."
        return format_html('<a href="{}" target="_blank">Open linked page</a>', obj.cta_url)


@admin.register(HeroReview)
class HeroReviewAdmin(admin.ModelAdmin):
    list_display = ("short_quote", "attribution", "rating", "display_order", "is_active")
    list_editable = ("rating", "display_order", "is_active")
    search_fields = ("quote", "attribution")
    list_filter = ("is_active", "rating")
    ordering = ("display_order", "-updated_at")
    readonly_fields = ("created_at", "updated_at")
    actions = (activate_hero_reviews, deactivate_hero_reviews)
    fieldsets = (
        ("Review", {
            "fields": ("quote", "attribution", "rating", "display_order", "is_active")
        }),
        ("Admin", {
            "fields": ("created_at", "updated_at")
        }),
    )

    @admin.display(description="Quote")
    def short_quote(self, obj):
        return obj.quote[:60]


class RestaurantMenuItemInline(admin.TabularInline):
    model = RestaurantMenuItem
    extra = 1
    fields = ("display_order", "name", "price", "image_url", "is_active", "description")
    ordering = ("display_order", "name")


@admin.register(RestaurantMenuSection)
class RestaurantMenuSectionAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "display_order", "item_count", "is_active")
    list_editable = ("display_order", "is_active")
    search_fields = ("title", "slug")
    ordering = ("display_order", "title")
    inlines = (RestaurantMenuItemInline,)
    actions = (activate_menu_sections, deactivate_menu_sections)
    fieldsets = (
        ("Section", {
            "fields": ("title", "slug", "display_order", "is_active")
        }),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(_item_count=Count("items"))

    @admin.display(description="Items")
    def item_count(self, obj):
        return obj._item_count


@admin.register(RestaurantMenuItem)
class RestaurantMenuItemAdmin(admin.ModelAdmin):
    list_display = ("name", "section", "price", "display_order", "is_active")
    list_filter = ("section", "is_active")
    list_editable = ("price", "display_order", "is_active")
    search_fields = ("name", "description", "price")
    ordering = ("section__display_order", "display_order", "name")
    actions = (activate_menu_items, deactivate_menu_items)
    fieldsets = (
        ("Menu Item", {
            "fields": ("section", "name", "description", "price", "image_url", "display_order", "is_active")
        }),
    )

