# Generated by Django 2.2 on 2020-11-24 23:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('boring_app', '0014_remove_user_profilepic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='proimage',
            name='caption',
        ),
        migrations.AddField(
            model_name='proimage',
            name='uploader',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Pro_pics', to='boring_app.User'),
        ),
        migrations.AlterField(
            model_name='status',
            name='poster',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='post', to='boring_app.User'),
        ),
    ]