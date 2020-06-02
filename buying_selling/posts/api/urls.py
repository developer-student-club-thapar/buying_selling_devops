from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'backend.posts'
router = DefaultRouter()
router.register('', views.PostViewset)


urlpatterns = [
    path('', include(router.urls)),
    path('manage/myposts/', views.MyPostListAPIView.as_view(), name="my-posts"),
    path('<pk>/images/', views.ImageView.as_view(), name='upload-images'),
    path('categories', views.CategoryView.as_view(), name='categories'),
]
