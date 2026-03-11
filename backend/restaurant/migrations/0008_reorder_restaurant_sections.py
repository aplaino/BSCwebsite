from django.db import migrations


def reorder_restaurant_sections(apps, schema_editor):
    Section = apps.get_model("restaurant", "RestaurantMenuSection")

    desired_order = {
        "lobster": 1,
        "fish-fry": 2,
        "from-the-grill": 3,
        "grilled-sandwiches": 4,
        "fried-sandwiches-po-boys": 5,
        "soups": 6,
        "beverages": 7,
    }

    for slug, display_order in desired_order.items():
        Section.objects.filter(slug=slug).update(display_order=display_order)


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0007_seed_restaurant_menu"),
    ]

    operations = [
        migrations.RunPython(reorder_restaurant_sections, migrations.RunPython.noop),
    ]
