# Generated by Django 3.1.7 on 2021-07-09 20:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainPage', '0002_aboutcompany_clue_companyhistory_main'),
    ]

    operations = [
        migrations.RenameField(
            model_name='header',
            old_name='address',
            new_name='адрес',
        ),
        migrations.RenameField(
            model_name='header',
            old_name='image',
            new_name='лого',
        ),
        migrations.RenameField(
            model_name='header',
            old_name='phone',
            new_name='номер_телефона',
        ),
    ]