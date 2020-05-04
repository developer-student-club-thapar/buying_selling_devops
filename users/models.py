from django.db import models

# Create your models here.
from django.core.validators import RegexValidator
from django.utils import timezone

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

from posts.models import Post

USERNAME_REGEX = '^[a-zA-Z0-9.+-]*$'
MOBILE_REGEX = '^(\+\d{1,3}[- ]?)?\d{10}$'


class MyUserManager(BaseUserManager):
    def create_user(self, mobile, username, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        if not mobile:
            raise ValueError('Users must have a mobile number')

        user = self.model(username=username, email=self.normalize_email(email), mobile=mobile)
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, mobile, email, password=None):
        user = self.create_user(mobile, username, email, password=password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    mobile = models.CharField(max_length=16, validators=[RegexValidator(regex=MOBILE_REGEX, message='Enter a valid mobile number', code='invalid_mobile')], unique=True)
    username = models.CharField(max_length=300, validators=[RegexValidator(regex=USERNAME_REGEX, message='Username must be alphanumeric or contain numbers', code='invalid_username')], unique=True)
    email = models.EmailField(max_length=255, unique=True, verbose_name='email address')
    firstName = models.CharField('First Name', max_length=20)
    lastName = models.CharField('Last Name', max_length=20)
    dateJoined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'mobile'
    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return self.username

    def get_short_name(self):
        return self.username

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True


class Wishlist(models.Model):
    author = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    post = models.ManyToManyField(Post)

    name = f"Wishlist for {author}"

    def __str__(self):
        return f"Wishlist for {self.author.username}"
