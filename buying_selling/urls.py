from django.contrib import admin
from django.urls import path
from users import views

urlpatterns = [path("admin/", admin.site.urls), path("google/", views.GoogleView.as_view(), name='google')]
