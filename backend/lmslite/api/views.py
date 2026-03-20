
from rest_framework import viewsets, generics, permissions, serializers
from rest_framework.response import Response
from lmslite.domain.models import Course, CustomUser

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'instructor_name', 'thumbnail', 'duration']

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]


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
