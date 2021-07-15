from django.db import models

class CEO(models.Model):
    ФИО = models.CharField(max_length=100)
    позиция = models.CharField(max_length=200)
    данные_в_виде_списка = models.TextField()
    данные = models.TextField()
    изображение = models.ImageField(upload_to='ceo')

class History(models.Model):
    год = models.CharField(max_length=15)
    название = models.CharField(max_length=200)
    выделенный_текст = models.TextField(null=True, blank=True)
    описание = models.TextField()
    добавить_на_главную_страницу = models.BooleanField()

class Gallery(models.Model):
    изображение = models.ImageField(upload_to='company')

class Certificate(models.Model):
    изображение = models.ImageField(upload_to='company')
    название = models.CharField(max_length=200)