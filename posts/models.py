from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import uuid


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    datePosted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    isSold = models.BooleanField(default=False)
    onDiscount = models.BooleanField(default=False)
    discountPercent = models.DecimalField(max_digits=2, decimal_places=2)
    age = models.IntegerField()
    brand = models.CharField(max_length=50)
    condition = models.TextField()

    def __str__(self):
        return self.title
