from users.models import Profile
from .serializers import ProfileDetailSerializer, ProfileUpdateSerializer
from .permissions import IsOwnerOrReadOnly

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import jwt
import environ
import os

env = environ.Env()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, env('SIGNING_KEY'), algorithms=['HS256'])


class ProfileDetailAPIView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        queryset = Profile.objects.get(user_id=payload['user_id'])
        serializer = ProfileDetailSerializer(queryset, many=False)
        return Response(serializer.data)


class ProfileUpdateAPIView(APIView):
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)

    def put(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        instance = Profile.objects.get(user_id=payload['user_id'])
        serializer = ProfileUpdateSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
