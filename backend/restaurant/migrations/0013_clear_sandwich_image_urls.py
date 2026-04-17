from django.db import migrations


def clear_sandwich_images(apps, schema_editor):
    RestaurantMenuItem = apps.get_model("restaurant", "RestaurantMenuItem")
    RestaurantMenuItem.objects.filter(
        section__title__icontains="sandwich"
    ).update(image_url="")


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0012_alter_foodtruckmenu_options_alter_eventnews_cta_url_and_more"),
    ]

    operations = [
        migrations.RunPython(clear_sandwich_images, migrations.RunPython.noop),
    ]
