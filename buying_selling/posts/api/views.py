from buying_selling.posts.models import Post
from .serializers import PostCreateSerializer, PostDetailSerializer, PostListSerializer, PostUpdateSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated
import jwt
from django.conf import settings
from rest_framework import viewsets, generics


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class MyPostListAPIView(generics.ListAPIView):
    serializer_class = PostListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        queryset = Post.objects.filter(author_id=payload['user_id'])
        return queryset


class PostViewset(viewsets.ModelViewSet):
    """Manage posts in the database"""

    serializer_action_classes = {
        'create': PostCreateSerializer,
        'list': PostListSerializer,
        'retrieve': PostDetailSerializer,
        'partial_update': PostUpdateSerializer,
        'update': PostUpdateSerializer,
    }
    queryset = Post.objects.all()

    permission_classes_by_action = {
        'create': [IsAuthenticated],
        'list': [AllowAny],
        'retrieve': [AllowAny],
        'update': [IsAuthenticated, IsOwnerOrReadOnly],
        'partial_update': [IsAuthenticated, IsOwnerOrReadOnly],
        'destroy': [IsAuthenticated, IsOwnerOrReadOnly],
    }

    def get_serializer_class(self):
        print(self.action)
        return self.serializer_action_classes[self.action]

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]

    def perform_create(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])
