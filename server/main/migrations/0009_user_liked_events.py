# Generated by Django 4.2.2 on 2023-07-06 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_user_togo_events'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='liked_events',
            field=models.TextField(blank=True),
        ),
    ]
