from django.contrib import admin
from .models import Course, Role, CustomUser

admin.site.register(Course)
admin.site.register(Role)
admin.site.register(CustomUser)
