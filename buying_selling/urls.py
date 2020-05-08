from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from users import views as user_views

urlpatterns = [path("admin/", admin.site.urls), path("google/", user_views.GoogleView.as_view(), name='google')]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
