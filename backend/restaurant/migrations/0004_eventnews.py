from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0003_foodtruckmenu"),
    ]

    operations = [
        migrations.CreateModel(
            name="EventNews",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=120)),
                ("summary", models.TextField()),
                ("badge", models.CharField(blank=True, default="Coming Up", max_length=40)),
                ("event_date", models.DateField(blank=True, null=True)),
                ("cta_label", models.CharField(blank=True, max_length=40)),
                ("cta_url", models.CharField(blank=True, max_length=255)),
                ("is_active", models.BooleanField(default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Event News",
                "verbose_name_plural": "Event News",
                "ordering": ["-event_date", "-updated_at"],
            },
        ),
    ]
