# Generated by Django 2.2.1 on 2019-05-09 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0064_auto_20190408_1928'),
    ]

    operations = [
        migrations.AddField(
            model_name='casemetadata',
            name='frontend_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
