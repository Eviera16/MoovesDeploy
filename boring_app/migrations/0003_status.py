# Generated by Django 2.2 on 2020-09-08 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('boring_app', '0002_user_user_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('info', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('mooz', models.ManyToManyField(related_name='mooz', to='boring_app.User')),
                ('poster', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post', to='boring_app.User')),
                ('replies', models.ManyToManyField(related_name='replies', to='boring_app.User')),
            ],
        ),
    ]
