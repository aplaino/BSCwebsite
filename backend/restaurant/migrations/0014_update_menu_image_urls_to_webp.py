from django.db import migrations


def jpg_to_webp(apps, schema_editor):
    RestaurantMenuItem = apps.get_model("restaurant", "RestaurantMenuItem")
    items = RestaurantMenuItem.objects.exclude(image_url="")
    for item in items:
        if item.image_url.lower().endswith(".jpg") or item.image_url.lower().endswith(".jpeg") or item.image_url.lower().endswith(".png"):
            stem = item.image_url.rsplit(".", 1)[0]
            item.image_url = stem + ".webp"
            item.save(update_fields=["image_url"])


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0013_clear_sandwich_image_urls"),
    ]

    operations = [
        migrations.RunPython(jpg_to_webp, migrations.RunPython.noop),
    ]
