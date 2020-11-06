from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = "backend.posts"
router = DefaultRouter()
router.register("", views.PostViewset)


urlpatterns = [
    path("categories/", views.CategoryView.as_view(), name="categories"),
    path("", include(router.urls)),
    path("manage/myposts/", views.MyPostListAPIView.as_view(), name="my-posts"),
    path("<pk>/images/", views.ImageView.as_view(), name="uppload-images"),
    path("<post_id>/report/", views.ReportView.as_view(), name="report-posts"),
]
