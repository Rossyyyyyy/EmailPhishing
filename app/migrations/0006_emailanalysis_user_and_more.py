# Generated by Django 5.1.3 on 2024-11-16 16:39

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_emailanalysis_confidence_score'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='emailanalysis',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='emailanalysis',
            name='confidence_score',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='emailanalysis',
            name='is_phishing',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='emailanalysis',
            name='sender',
            field=models.EmailField(max_length=254),
        ),
    ]