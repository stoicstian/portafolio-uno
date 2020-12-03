from django.contrib import admin
from django.urls import path, include

# router = routers.DefaultRouter()
# router.register(r"users", views.UserViewSet)
# router.register(r"groups", views.GroupViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("blog.urls", namespace="blog")),
    path("api", include("api.urls", namespace="api"))
    # path("", include(router.urls)),
    # path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
