from buying_selling.posts.models import Post, PostImage
from .serializers import ImageSerializer, PostCreateSerializer, PostDetailSerializer, PostListSerializer, PostUpdateSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
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
        return self.serializer_action_classes[self.action]

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]

    def retrieve(self, request, pk, format=None):
        post = Post.objects.get(pk=pk)
        images = PostImage.objects.filter(post_id=pk)
        post_serializer = PostDetailSerializer(post, context={'request': request}).data
        image_serializer = ImageSerializer(images, many=True, context={'request': request}).data
        images = []
        print(image_serializer)
        for image in image_serializer:
            images.append(image)
        post_serializer['images'] = images
        return Response(post_serializer)

    def perform_create(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])
