from django.contrib import admin
from django.urls import path, include, urls

# router = routers.DefaultRouter()
# router.register(r"users", views.UserViewSet)
# router.register(r"groups", views.GroupViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("blog.urls", namespaces="blog")),
    path("api", include("api.urls"), namespaces="api")
    # path("", include(router.urls)),
    # path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
