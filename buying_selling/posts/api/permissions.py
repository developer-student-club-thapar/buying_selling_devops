from rest_framework.permissions import BasePermission
import jwt
from django.conf import settings
from buying_selling.posts.models import Post


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the owner of this object to update it !!"

    def has_object_permission(self, request, view, obj):
        payload = jwt_decoder(request.headers['Authorization'].split()[1])
        user_id = payload['user_id']
        return str(obj.author_id) == user_id


class IsOwnerForPostImage(BasePermission):
    message = "You must be the owner of this post to add images to it !!"

    def has_permission(self, request, view):
        payload = jwt_decoder(request.headers['Authorization'].split()[1])
        user_id = payload['user_id']
        post_id = request.path.split('/')[3]
        post = Post.objects.get(id=post_id)
        return str(post.author_id) == user_id


class IsOwnerForPost(BasePermission):
    message = "Post Disabled!"

    def has_permission(self, request, view):
        payload = jwt_decoder(request.headers['Authorization'].split()[1])
        user_id = payload['user_id']
        post_id = request.path.split('/')[3]
        post = Post.objects.get(id=post_id)
        return str(post.author_id) == user_id
