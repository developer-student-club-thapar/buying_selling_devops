from django.urls import path

from .views import ProfileDetailAPIView, ProfileListAPIView, ProfileUpdateAPIView

urlpatterns = [
    path('', ProfileListAPIView.as_view(), name='list'),
    path('<user>', ProfileDetailAPIView.as_view(), name='detail'),
    path('<user>/update/', ProfileUpdateAPIView.as_view(), name='update'),
]
