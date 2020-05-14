from django.contrib import admin
from .models import Category, Post, PostImage

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(PostImage)
