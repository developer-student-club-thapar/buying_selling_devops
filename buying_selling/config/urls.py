from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from buying_selling.users import views as user_views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('api/posts/', include('buying_selling.posts.api.urls')),
    path('api/users/', include('buying_selling.users.api.urls')),
    path('admin/', admin.site.urls),
    path("google/auth/token/", user_views.GoogleView.as_view(), name='google'),
    path('google/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('hi/', user_views.HelloView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
