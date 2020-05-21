from users.models import Profile
from .serializers import ProfileDetailSerializer, ProfileUpdateSerializer
from .permissions import IsOwnerOrReadOnly


from rest_framework.generics import RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
import jwt
import environ
import os

env = environ.Env()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, env('SIGNING_KEY'), algorithms=['HS256'])


class ProfileDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileDetailSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated,)


class ProfileUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])
