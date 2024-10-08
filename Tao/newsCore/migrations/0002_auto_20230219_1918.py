# Generated by Django 3.1 on 2023-02-19 13:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsCore', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Изображения'),
        ),
        migrations.AlterField(
            model_name='post',
            name='postDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 19, 19, 18, 32, 219466), verbose_name='Дата и время публикации'),
        ),
    ]
