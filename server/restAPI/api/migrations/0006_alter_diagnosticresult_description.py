# Generated by Django 4.1.7 on 2023-03-18 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_diagnosticresult_block'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diagnosticresult',
            name='description',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]
