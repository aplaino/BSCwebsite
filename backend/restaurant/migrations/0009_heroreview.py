from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0008_reorder_restaurant_sections"),
    ]

    operations = [
        migrations.CreateModel(
            name="HeroReview",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("quote", models.TextField()),
                ("attribution", models.CharField(default="Google Reviews", max_length=80)),
                ("rating", models.PositiveSmallIntegerField(default=5)),
                ("display_order", models.PositiveIntegerField(default=0)),
                ("is_active", models.BooleanField(default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Hero Review",
                "verbose_name_plural": "Hero Reviews",
                "ordering": ["display_order", "-updated_at"],
            },
        ),
    ]
