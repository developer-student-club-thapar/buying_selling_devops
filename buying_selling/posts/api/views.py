from buying_selling.posts.models import Post
from .serializers import PostCreateSerializer, PostDetailSerializer, PostListSerializer, PostUpdateSerializer
from .permissions import IsOwnerOrReadOnly


from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
import jwt
import environ
import os

env = environ.Env()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, env('SIGNING_KEY'), algorithms=['HS256'])


class MyPostListAPIView(ListAPIView):
    serializer_class = PostListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        queryset = Post.objects.filter(author_id=payload['user_id'])
        return queryset


class PostCreateAPIView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])


class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = (AllowAny,)


class PostUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostUpdateSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])


class PostDestroyAPIView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)


class PostListAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_classes = (AllowAny,)
