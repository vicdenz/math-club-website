# Generated by Django 4.2.4 on 2023-12-13 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_contest_award_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='contest',
            name='short_provider',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
