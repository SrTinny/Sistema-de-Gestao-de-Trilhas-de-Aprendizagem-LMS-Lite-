from lmslite.api.views import MeView
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from django.http import JsonResponse
from lmslite.api.views import UserMeView, CourseViewSet
from rest_framework.routers import DefaultRouter

def health(request):
    return JsonResponse({"status": "ok"})

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='course')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/v1/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/v1/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("health/", health, name="health"),
    path("api/v1/users/me/", UserMeView.as_view(), name="user_me"),
    path("api/v1/me/", MeView.as_view(), name="me"),
    path("api/v1/", include(router.urls)),
]