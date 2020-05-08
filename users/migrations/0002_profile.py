# Generated by Django 2.2.10 on 2020-05-08 10:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='default.jpg', upload_to='profile_pics')),
                ('bio', models.TextField()),
                ('year', models.CharField(choices=[('1', 'First'), ('2', 'Second'), ('3', 'Third'), ('4', 'Fourth')], default='1', max_length=1)),
                (
                    'branch',
                    models.CharField(
                        choices=[
                            ('COE', 'Computer Engineering'),
                            ('CSE', 'Computer Science Engineering'),
                            ('ECE', 'Electroincs and Communications Engineering'),
                            ('ENC', 'Electroincs and Computer Engineering'),
                            ('COBS', 'Computer Science and Business Studies'),
                            ('CE', 'Chemical Engineering'),
                            ('CiE', 'Civil Engineering'),
                            ('BiE', 'Biotechnology'),
                            ('BME', 'Biomedical Engineering'),
                            ('SE', 'Structural Engineering'),
                            ('IE', 'Infrastructure Engineering'),
                            ('ME', 'Mechanical Engineering'),
                            ('MEC', 'Mechatronics Engineering'),
                            ('EE', 'Electrical Engineering'),
                            ('ECE', 'Electroinc (Instrumentation and Control)'),
                            ('ME(P)', 'Mechanical (Production) Engineering'),
                            ('BE-MBA(ME)', 'Mechanical MBA Dual Degree'),
                            ('BE-MBA(ECE)', 'Electroincs MBA Dual Degree'),
                        ],
                        max_length=11,
                    ),
                ),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]