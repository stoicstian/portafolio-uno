# from django.urls import path, include
# from .views import UserViewSet, GroupViewSet
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r"users", UserViewSet)
# router.register(r"groups", GroupViewSet)

# urlpatterns = [
#     path("", include(router.urls)),
#     path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
# ]

from django.urls import path
from .views import PostList, PostDetail

app_name = "api"

urlpatterns = [
    path("", PostList.as_view(), name="listcreate"),
    path("<int:pk>", PostDetail.as_view(), name="detailcreate"),
]
