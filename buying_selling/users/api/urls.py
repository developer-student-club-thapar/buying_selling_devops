from django.urls import path, include

from .views import MyProfileAPIView, ProfileDetailAPIView, ProfileUpdateAPIView, SavedPostViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', SavedPostViewset)


urlpatterns = [
    path('profile/myprofile/', MyProfileAPIView.as_view(), name='my-profile'),
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('profile/myprofile/update/<user>/', ProfileUpdateAPIView.as_view(), name='update'),
    path('saved_posts/', include(router.urls)),
]
