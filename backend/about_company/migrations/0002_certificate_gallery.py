# Generated by Django 3.1.7 on 2021-07-12 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_company', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Certificate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('изображение', models.ImageField(upload_to='company')),
                ('название', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('изображение', models.ImageField(upload_to='company')),
            ],
        ),
    ]