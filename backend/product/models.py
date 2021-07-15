from django.db import models

class Product(models.Model):
    изображение = models.ImageField(upload_to='products')
    объем = models.CharField(max_length=50)
    название = models.CharField(max_length=100)
    тип = models.CharField(max_length=100)
    описание = models.TextField()