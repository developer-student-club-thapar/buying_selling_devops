from django.db import models
from django.utils import timezone
import uuid
from django.conf import settings
from profanity.validators import validate_is_profane
from django.core.validators import MinValueValidator


class Category(models.Model):
    name = models.CharField(
        max_length=40,
    )

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Post(models.Model):

    CONDITION_CHOICES = (
        ("VB", "Very Bad"),
        ("BA", "Bad"),
        ("G", "Good"),
        ("BE", "Best"),
        ("E", "Couldn't be better"),
    )

    AGE_CHOICES = (
        ("l6", "Less than 6 months"),
        ("6to1", "6 months to 1 year"),
        ("1to3", "1-3 years"),
        ("3to5", "3-5 years"),
        ("g5", "More than 5 years"),
    )

    category = models.ManyToManyField(Category)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100, validators=[validate_is_profane])
    description = models.TextField(validators=[validate_is_profane])
    datePosted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    isSold = models.BooleanField(default=False)
    onDiscount = models.BooleanField(default=False)
    enabled = models.BooleanField(default=True)
    discountPercent = models.DecimalField(max_digits=4, decimal_places=2)
    age = models.CharField(max_length=4, choices=AGE_CHOICES)
    brand = models.CharField(max_length=50, validators=[validate_is_profane])

    condition = models.CharField(max_length=3, choices=CONDITION_CHOICES)

    def __str__(self):
        return self.title


class PostImage(models.Model):

    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="posts-images", verbose_name="Image")

    class Meta:
        verbose_name = "image"
        verbose_name_plural = "PostImages"

    def __str__(self):
        return f"Image for {self.post.title}"


class Report(models.Model):

    post = models.OneToOneField(Post, on_delete=models.CASCADE)
    reports = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    reported_by = models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return f"Reports for {self.post.title}"
