from django.contrib.auth.models import AbstractUser
from django.db import models

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
