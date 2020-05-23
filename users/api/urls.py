from django.urls import path

from .views import MyProfileAPIView, ProfileDetailAPIView, ProfileUpdateAPIView

urlpatterns = [
    path('profile/myprofile/', MyProfileAPIView.as_view(), name='my-profile'),
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('profile/myprofile/update/<user>/', ProfileUpdateAPIView.as_view(), name='update'),
]
