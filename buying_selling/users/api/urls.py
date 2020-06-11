from django.urls import path
from .views import ProfileDetailAPIView, MyProfileViewset

my_profile = MyProfileViewset.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update',})

urlpatterns = [
    path('profile/<user>/', ProfileDetailAPIView.as_view(), name='detail'),
    path('myprofile/', my_profile, name='my-profile'),
]
