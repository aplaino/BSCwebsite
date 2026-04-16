from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0010_seed_hero_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventnews',
            name='event_date',
            field=models.DateField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='eventnews',
            name='is_active',
            field=models.BooleanField(db_index=True, default=True),
        ),
        migrations.AlterField(
            model_name='heroreview',
            name='is_active',
            field=models.BooleanField(db_index=True, default=True),
        ),
        migrations.AlterField(
            model_name='restaurantmenuitem',
            name='is_active',
            field=models.BooleanField(db_index=True, default=True),
        ),
        migrations.AlterField(
            model_name='restaurantmenusection',
            name='is_active',
            field=models.BooleanField(db_index=True, default=True),
        ),
    ]
