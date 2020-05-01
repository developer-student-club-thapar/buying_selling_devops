from django.db import models
from django.utils import timezone
import uuid
from django.conf import settings


class Post(models.Model):
    cat_choices = [
        ('Mobile', (('mobile', 'Mobiles'), ('mob_accessories', 'Mobile Accessories'), ('tablet', 'Tablets'))),
        ('other', 'Others')
        # Need to add more categories
    ]

    category = models.CharField(max_length=40, choices=cat_choices, default='Others',)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    datePosted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    isSold = models.BooleanField(default=False)
    onDiscount = models.BooleanField(default=False)
    discountPercent = models.DecimalField(max_digits=2, decimal_places=2)
    age = models.IntegerField()
    brand = models.CharField(max_length=50)
    condition = models.TextField()

    def __str__(self):
        return self.title
