
from rest_framework import viewsets, generics, permissions, serializers
from rest_framework.response import Response
from lmslite.domain.models import Course, Module, Lesson, CustomUser


# Serializers aninhados para Lesson e Module
class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'title', 'order', 'content_url', 'published']

class ModuleSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Module
        fields = ['id', 'title', 'order', 'duration_min', 'published', 'lessons']

class CourseDetailSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'instructor_name', 'thumbnail', 'duration', 'modules']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'instructor_name', 'thumbnail', 'duration']


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseDetailSerializer
        return CourseSerializer


class UserMeSerializer(serializers.ModelSerializer):
    roles = serializers.SlugRelatedField(
        many=True, slug_field='name', read_only=True, source='roles')

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'roles']

class UserMeView(generics.RetrieveAPIView):
    serializer_class = UserMeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_object())
        return Response(serializer.data)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from lmslite.domain.models import CustomUser
from lmslite.domain.serializers import CustomUserSerializer

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CustomUserSerializer(request.user)
        return Response(serializer.data)
