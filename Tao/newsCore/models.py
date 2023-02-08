from django.db import models
from datetime import datetime

# Create your models here.
class Post(models.Model):
    title = models.CharField("Заголовок", max_length=255)
    postDate = models.DateTimeField("Дата и время публикации", default=datetime.now)
    content = models.TextField("Контент")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Пост"
        verbose_name_plural = "Посты"
