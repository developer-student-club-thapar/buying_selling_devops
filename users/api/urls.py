from django.urls import path

from .views import MyProfileAPIView, ProfileDetailAPIView, ProfileUpdateAPIView

urlpatterns = [
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('profile/', MyProfileAPIView.as_view(), name='my-profile'),
    path('profile/update/', ProfileUpdateAPIView.as_view(), name='update'),
]
