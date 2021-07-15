from django.db import models
class Block(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    изображение = models.ImageField(upload_to='news')
    название = models.CharField(max_length=150)
    выделенный_текст_на_главной_странице = models.TextField(null=True, blank=True)
    контент = models.TextField()
    выделяющийся_текст = models.TextField(null=True, blank=True)
    добавить_на_главную_страницу = models.BooleanField()

    def str(self):
        return {
            'id': self.id,
            'date': self.date,
            'title': self.название,
            'content': self.контент,
            'text': self.выделяющийся_текст,
            'option': self.добавить_на_главную_страницу
        }
