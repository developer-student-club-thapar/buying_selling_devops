# Generated by Django 2.2.10 on 2020-06-05 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(model_name='profile', name='image', field=models.ImageField(blank=True, null=True, upload_to='profile_pics'),),
        migrations.AlterField(model_name='profile', name='year', field=models.CharField(choices=[('1', 'First'), ('2', 'Second'), ('3', 'Third'), ('4', 'Fourth')], max_length=1),),
    ]
