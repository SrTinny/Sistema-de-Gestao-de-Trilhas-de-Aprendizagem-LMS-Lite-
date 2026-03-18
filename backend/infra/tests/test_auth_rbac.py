from rest_framework.test import APITestCase
from django.urls import reverse
from lmslite.domain.models import CustomUser, Role
from rest_framework import status

class AuthRBACIntegrationTest(APITestCase):
    def setUp(self):
        self.role_student = Role.objects.create(name='Student', slug='student')
        self.role_instructor = Role.objects.create(name='Instructor', slug='instructor')
        self.student = CustomUser.objects.create_user(username='student1', password='studpass')
        self.instructor = CustomUser.objects.create_user(username='instructor1', password='instpass')
        self.student.roles.add(self.role_student)
        self.instructor.roles.add(self.role_instructor)
        self.course_url = '/api/v1/courses/'

    def get_token(self, username, password):
        url = reverse('token_obtain_pair')
        resp = self.client.post(url, {'username': username, 'password': password}, format='json')
        return resp.data.get('access')

    def test_student_cannot_create_course(self):
        token = self.get_token('student1', 'studpass')
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        resp = self.client.post(self.course_url, {'title': 'Curso X'}, format='json')
        self.assertEqual(resp.status_code, status.HTTP_403_FORBIDDEN)

    def test_instructor_can_create_course(self):
        token = self.get_token('instructor1', 'instpass')
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        resp = self.client.post(self.course_url, {'title': 'Curso Y'}, format='json')
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)