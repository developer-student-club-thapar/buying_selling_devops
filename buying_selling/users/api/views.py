from buying_selling.users.models import Profile
from .serializers import MyProfileSerializer, ProfileDetailSerializer

from .permissions import IsOwnerOrReadOnly

from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
import jwt
from django.conf import settings


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class MyProfileViewset(viewsets.ViewSet):
    """
    A simple ViewSet for updating or retrieving user profiles.
    """

    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        instance = Profile.objects.get(user_id=payload['user_id'])
        serializer = MyProfileSerializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        instance = Profile.objects.get(user_id=payload['user_id'])
        serializer = MyProfileSerializer(instance, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save(user_id=payload['user_id'])
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(user_id=payload['user_id'])


class ProfileDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileDetailSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated,)
