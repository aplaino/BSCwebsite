from rest_framework import serializers

from .models import CateringRequest, ContactInquiry


class CateringRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CateringRequest
        fields = [
            "full_name",
            "email",
            "phone",
            "company_name",
            "service_type",
            "event_date",
            "event_address",
            "start_time",
            "end_time",
            "budget",
            "notes",
        ]
        extra_kwargs = {
            "full_name": {"required": True},
            "email": {"required": True},
            "phone": {"required": True},
            "event_date": {"required": True},
            "event_address": {"required": True},
            "start_time": {"required": True},
            "end_time": {"required": True},
            "company_name": {"required": False, "allow_blank": True, "allow_null": True},
            "budget": {"required": False, "allow_blank": True, "allow_null": True},
            "notes": {"required": False, "allow_blank": True},
        }

    def validate_service_type(self, value):
        valid = {choice[0] for choice in CateringRequest.SERVICE_OPTIONS}
        if value not in valid:
            raise serializers.ValidationError(
                f"Invalid service type. Must be one of: {', '.join(valid)}"
            )
        return value

    def validate_full_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Please enter your full name.")
        return value.strip()

    def validate_phone(self, value):
        digits = "".join(c for c in value if c.isdigit())
        if len(digits) < 7:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ["name", "email", "phone", "message"]
        extra_kwargs = {
            "name": {"required": True},
            "email": {"required": True},
            "phone": {"required": True},
            "message": {"required": True},
        }

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Please enter your name.")
        return value.strip()

    def validate_phone(self, value):
        digits = "".join(c for c in value if c.isdigit())
        if len(digits) < 7:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value

    def validate_message(self, value):
        if len(value.strip()) < 5:
            raise serializers.ValidationError("Please enter a message.")
        return value.strip()
