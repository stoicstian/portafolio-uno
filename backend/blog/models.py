"""Modelos BD."""
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    """Categoría de Blog."""

    name = models.CharField(max_length=100)

    def __str__(self):
        """Método String."""
        return self.name


class Post(models.Model):
    """Post."""

    class Meta:
        """Clase Meta."""

        ordering = ("-published",)

    class PostObjects(models.Manager):
        """Model Manager."""

        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    OPTIONS = (
        ("draft", "Draft"),
        ("published", "Published"),
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=50, unique_for_date="published")
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="blog_posts"
    )
    status = models.CharField(max_length=10, choices=OPTIONS, default="published")
    objects = models.Manager()
    postobjects = PostObjects()

    def __str__(self):
        """Método String."""
        return self.title
