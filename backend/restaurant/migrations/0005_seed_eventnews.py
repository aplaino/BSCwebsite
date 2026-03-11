from datetime import date

from django.db import migrations


def seed_event_news(apps, schema_editor):
    EventNews = apps.get_model("restaurant", "EventNews")

    if EventNews.objects.exists():
        return

    EventNews.objects.create(
        title="Commerce Court Lunch Service",
        summary=(
            "Catch Buster's Sea Cove at Commerce Court for weekday lunch. "
            "Fresh seafood favorites are served Monday to Friday from 11:00 am to 3:00 pm."
        ),
        badge="Coming Up",
        event_date=date(2026, 3, 11),
        cta_label="View Schedule",
        cta_url="/schedule",
        is_active=True,
    )


def remove_seed_event_news(apps, schema_editor):
    EventNews = apps.get_model("restaurant", "EventNews")
    EventNews.objects.filter(
        title="Commerce Court Lunch Service",
        cta_url="/schedule",
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0004_eventnews"),
    ]

    operations = [
        migrations.RunPython(seed_event_news, remove_seed_event_news),
    ]
