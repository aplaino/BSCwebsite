from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0005_seed_eventnews"),
    ]

    operations = [
        migrations.CreateModel(
            name="RestaurantMenuSection",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=100)),
                ("slug", models.SlugField(unique=True)),
                ("display_order", models.PositiveIntegerField(default=0)),
                ("is_active", models.BooleanField(default=True)),
            ],
            options={
                "verbose_name": "Restaurant Menu Section",
                "verbose_name_plural": "Restaurant Menu Sections",
                "ordering": ["display_order", "title"],
            },
        ),
        migrations.CreateModel(
            name="RestaurantMenuItem",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=120)),
                ("description", models.TextField(blank=True)),
                ("price", models.CharField(max_length=40)),
                ("image_url", models.CharField(blank=True, max_length=255)),
                ("display_order", models.PositiveIntegerField(default=0)),
                ("is_active", models.BooleanField(default=True)),
                ("section", models.ForeignKey(on_delete=models.deletion.CASCADE, related_name="items", to="restaurant.restaurantmenusection")),
            ],
            options={
                "verbose_name": "Restaurant Menu Item",
                "verbose_name_plural": "Restaurant Menu Items",
                "ordering": ["display_order", "name"],
            },
        ),
    ]
