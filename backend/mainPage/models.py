from django.db import models

class Header(models.Model):
    адрес = models.CharField(max_length=50)
    номер_телефона = models.CharField(max_length=20)
    лого = models.ImageField(upload_to='logo')

    def __str__(self):
        return "Address: {}, phone: {}".format(self.адрес, self.номер_телефона)

class Main(models.Model):
    название = models.CharField(max_length=100)
    описание = models.TextField()
    выделенный_текст = models.TextField(null=True,  blank=True)
    текст1 = models.CharField(max_length=50)
    подтекст1 = models.CharField(max_length=30)
    текст2 = models.CharField(max_length=50)
    подтекст2 = models.CharField(max_length=30)
    изображение = models.ImageField(upload_to='main')

class AboutCompany(models.Model):
    название = models.CharField(max_length=100)
    описание = models.TextField()
    выделенный_текст = models.TextField(null=True, blank=True)
    изображение = models.ImageField(upload_to='mainCompanyBlock')


class Clue(models.Model):
    домен = models.CharField(max_length=30) 
    текст = models.CharField(max_length=50)
