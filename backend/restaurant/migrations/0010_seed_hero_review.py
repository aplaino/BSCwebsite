from django.db import migrations


def seed_hero_review(apps, schema_editor):
    HeroReview = apps.get_model("restaurant", "HeroReview")

    if HeroReview.objects.exists():
        return

    HeroReview.objects.create(
        quote="Best lobster roll in Toronto! Fresh, fast, and always consistent.",
        attribution="Google Reviews",
        rating=5,
        display_order=1,
        is_active=True,
    )


def remove_seed_hero_review(apps, schema_editor):
    HeroReview = apps.get_model("restaurant", "HeroReview")
    HeroReview.objects.filter(
        quote="Best lobster roll in Toronto! Fresh, fast, and always consistent.",
        attribution="Google Reviews",
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0009_heroreview"),
    ]

    operations = [
        migrations.RunPython(seed_hero_review, remove_seed_hero_review),
    ]
