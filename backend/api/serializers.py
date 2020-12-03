# from re import search
# from django.contrib.auth.models import User, Group
# from django.db.models import fields
# from rest_framework import serializers


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ["url", "username", "email", "groups"]


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ["url", "name"]

from rest_framework import serializers
from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    """Post Serializador."""

    class Meta:
        """Clase Meta."""

        fields = ("id", "title", "author", "excerpt", "content", "status")
        model = Post
