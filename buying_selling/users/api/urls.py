from django.urls import path, include

from .views import MyProfileViewset, ProfileDetailAPIView, SavedPostViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', SavedPostViewset)
my_profile = MyProfileViewset.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update',})


urlpatterns = [
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('myprofile/', my_profile, name='my-profile'),
    path('saved_posts/', include(router.urls)),
]
