from rest_framework.permissions import BasePermission
import jwt
from django.conf import settings


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the owner of this object to update it !!"

    def has_object_permission(self, request, view, obj):
        payload = jwt_decoder(request.headers['Authorization'].split()[1])
        user_id = payload['user_id']
        return obj.author_id == user_id
