from django.urls import path

from .views import MyPostListAPIView, PostCreateAPIView, PostDestroyAPIView, PostDetailAPIView, PostListAPIView, PostUpdateAPIView

urlpatterns = [
    path('', PostListAPIView.as_view(), name='list'),
    path('create/', PostCreateAPIView.as_view(), name='create'),
    path('myposts/', MyPostListAPIView.as_view(), name='my-posts'),
    path('<pk>/', PostDetailAPIView.as_view(), name='detail'),
    path('<pk>/edit/', PostUpdateAPIView.as_view(), name='update'),
    path('<pk>/delete/', PostDestroyAPIView.as_view(), name='delete'),
]
