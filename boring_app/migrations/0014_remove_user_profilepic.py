# Generated by Django 2.2 on 2020-11-24 22:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boring_app', '0013_auto_20201124_1745'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='ProfilePic',
        ),
    ]
