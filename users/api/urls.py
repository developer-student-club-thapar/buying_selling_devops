from django.urls import path

from .views import ProfileDetailAPIView, ProfileUpdateAPIView

urlpatterns = [
    path('profile/', ProfileDetailAPIView.as_view(), name='detail'),
    path('profile/update/', ProfileUpdateAPIView.as_view(), name='update'),
]
