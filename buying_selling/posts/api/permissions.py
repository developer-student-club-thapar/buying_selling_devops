from rest_framework.permissions import BasePermission
import jwt
import environ
import os

env = environ.Env()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, env('SIGNING_KEY'), algorithms=['HS256'])


class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the owner of this object to update it !!"

    def has_object_permission(self, request, view, obj):
        payload = jwt_decoder(request.headers['Authorization'].split()[1])
        user_id = payload['user_id']
        return obj.author_id == user_id
