from buying_selling.posts.models import Post, PostImage
from .serializers import AddImageSerializer, ImageSerializer, PostCreateSerializer, PostDetailSerializer, PostListSerializer, PostUpdateSerializer
from .permissions import IsOwnerOrReadOnly, IsOwnerForPostImage
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
import jwt
from django.conf import settings
from rest_framework import viewsets, generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


def modify_input_for_multiple_files(post_id, image):
    dict = {}
    dict['post'] = post_id
    dict['image'] = image
    return dict


class ImageView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        IsAuthenticated,
        IsOwnerForPostImage,
    ]

    def post(self, request, pk, *args, **kwargs):
        post_id = pk

        # converts querydict to original dict
        images = dict((request.data).lists())['image']
        flag = 1
        arr = []
        for img_name in images:
            modified_data = modify_input_for_multiple_files(post_id, img_name)
            file_serializer = AddImageSerializer(data=modified_data, context={"request": request})
            if file_serializer.is_valid():
                file_serializer.save()
                arr.append(file_serializer.data)
            else:
                flag = 0

        if flag == 1:
            return Response(arr, status=status.HTTP_201_CREATED)
        else:
            return Response(arr, status=status.HTTP_400_BAD_REQUEST)


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

    filter_backends = (
        DjangoFilterBackend,
        OrderingFilter,
        SearchFilter,
    )
    filter_fields = ('isSold', 'onDiscount', 'category', 'condition')
    ordering_fields = ('datePosted', 'discountPercent', 'price')
    search_fields = ('title', 'brand')

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
