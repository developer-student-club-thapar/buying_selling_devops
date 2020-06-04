from django.db import models

# Create your models here.
from django.core.validators import RegexValidator
from django.utils import timezone
from PIL import Image
import uuid

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

from buying_selling.posts.models import Post

USERNAME_REGEX = '^[a-zA-Z0-9.+-]*$'
MOBILE_REGEX = '^(\+\d{1,3}[- ]?)?\d{10}$'  # noqa


class MyUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(email=self.normalize_email(email), username=username)
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(email, username, password=password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    mobile = models.CharField(max_length=16, validators=[RegexValidator(regex=MOBILE_REGEX, message='Enter a valid mobile number', code='invalid_mobile')])
    username = models.CharField(max_length=300, validators=[RegexValidator(regex=USERNAME_REGEX, message='Username must be alphanumeric or contain numbers', code='invalid_username')], unique=True)
    email = models.EmailField(max_length=255, unique=True, verbose_name='email address')
    firstName = models.CharField('First Name', max_length=20)
    lastName = models.CharField('Last Name', max_length=20)
    dateJoined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'username',
    ]

    def __str__(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True


class SavedPosts(models.Model):
    author = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    post = models.ManyToManyField(Post)

    def __str__(self):
        return f"Wishlist for {self.author.username}"


class Profile(models.Model):
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_pics', blank=True, null=True)
    bio = models.TextField()
    isHosteler = models.BooleanField(default=True)
    YEAR_CHOICES = (
        ('1', 'First'),
        ('2', 'Second'),
        ('3', 'Third'),
        ('4', 'Fourth'),
    )
    BRANCH_CHOICES = (
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
        ('Others', 'Other'),
    )
    hostelChoices = (
        ('A', 'Hostel A'),
        ('B', 'Hostel B'),
        ('C', 'Hostel C'),
        ('D', 'Hostel D'),
        ('E', 'Hostel E'),
        ('F', 'Hostel F'),
        ('G', 'Hostel G'),
        ('H', 'Hostel H'),
        ('I', 'Hostel I'),
        ('J', 'Hostel J'),
        ('K', 'Hostel K'),
        ('L', 'Hostel L'),
        ('M', 'Hostel M'),
        ('FRD', 'Hostel FRD'),
        ('FRE', 'Hostel FRE'),
    )
    hostel = models.CharField(max_length=1, choices=hostelChoices)
    year = models.CharField(max_length=1, choices=YEAR_CHOICES)
    branch = models.CharField(max_length=11, choices=BRANCH_CHOICES)

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, **args):
        super().save()

        if self.image:
            img = Image.open(self.image.path)
        else:
            return

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
