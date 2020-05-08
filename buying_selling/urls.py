from django.contrib import admin
from django.urls import path
from users import views as user_views

urlpatterns = [path("admin/", admin.site.urls), path("google/", user_views.GoogleView.as_view(), name='google')]
