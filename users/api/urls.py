from django.urls import path

from .views import ProfileDetailAPIView, ProfileUpdateAPIView

urlpatterns = [
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('profile/<user>/update/', ProfileUpdateAPIView.as_view(), name='update'),
]
