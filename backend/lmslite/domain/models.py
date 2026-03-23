
from django.contrib.auth.models import AbstractUser
from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    instructor_name = models.CharField(max_length=255)
    thumbnail = models.URLField(blank=True, null=True)
    duration = models.CharField(max_length=32)

    def __str__(self):
        return self.title


class Module(models.Model):
    course = models.ForeignKey(Course, related_name="modules", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField()
    duration_min = models.PositiveIntegerField()
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["order"]
        unique_together = ("course", "order")

    def __str__(self):
        return f"{self.title} ({self.course.title})"


class Lesson(models.Model):
    module = models.ForeignKey(Module, related_name="lessons", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField()
    content_url = models.URLField(blank=True, null=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["order"]
        unique_together = ("module", "order")

    def __str__(self):
        return f"{self.title} ({self.module.title})"

class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=32, unique=True)

    class Meta:
        verbose_name = 'Role'
        verbose_name_plural = 'Roles'
        indexes = [
            models.Index(fields=['slug']),
        ]

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    roles = models.ManyToManyField(Role, related_name='users', blank=True)

    def has_role(self, slug):
        return self.roles.filter(slug=slug).exists()
