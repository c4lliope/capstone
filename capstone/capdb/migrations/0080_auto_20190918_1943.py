# Generated by Django 2.2.4 on 2019-09-18 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0079_auto_20190829_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='citation',
            name='type',
            field=models.CharField(choices=[('official', 'official'), ('parallel', 'parallel'), ('nominative', 'nominative')], max_length=100),
        ),
        migrations.AlterField(
            model_name='historicalcitation',
            name='type',
            field=models.CharField(choices=[('official', 'official'), ('parallel', 'parallel'), ('nominative', 'nominative')], max_length=100),
        ),
    ]
