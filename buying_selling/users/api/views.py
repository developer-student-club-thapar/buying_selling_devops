from buying_selling.users.models import Profile, SavedPosts, Hostel
from buying_selling.posts.models import Post
from .serializers import MyProfileSerializer, MyProfileUpdateSerializer, ProfileDetailSerializer, SavedPostCreateSerializer, HostelSerialiizer
from buying_selling.posts.api.serializers import PostListSerializer

from .permissions import IsOwnerOrReadOnly

from rest_framework import status
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import jwt
from django.conf import settings


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class Hostels(ListAPIView):
    queryset = Hostel.objects.all()
    serializer_class = HostelSerialiizer
    permission_classes = (IsAuthenticated,)


class MyProfileViewset(ViewSet):
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
        serializer = MyProfileUpdateSerializer(instance, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save(user_id=payload['user_id'])
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class ProfileDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileDetailSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated,)


class SavedPostViewset(ModelViewSet):

    serializer_action_classes = {
        'create': SavedPostCreateSerializer,
        'list': PostListSerializer,
    }
    queryset = SavedPosts.objects.all()

    permission_classes_by_action = {
        'create': [IsAuthenticated],
        'list': [IsAuthenticated, IsOwnerOrReadOnly],
        'destroy': [IsAuthenticated, IsOwnerOrReadOnly],
    }

    def get_serializer_class(self):
        return self.serializer_action_classes[self.action]

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]

    # def perform_create(self, serializer):
    #     payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
    #     try:
    #         serializer.save(author_id=payload['user_id'])
    #     except Exception as e:
    #         post_id = serializer.data['post'][0]
    #         saved_post_model = SavedPosts.objects.filter(author_id=payload['user_id'])[0]
    #         for post in saved_post_model.post.all():
    #             if post.id == post_id:
    #                 return Response({'message': 'Post is already saved'}, status=status.HTTP_409_CONFLICT)
    #         saved_post_model.post.add(Post.objects.get(id=post_id))
    def create(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save(author_id=payload['user_id'])
                return Response({'message': 'Post saved'}, status=status.HTTP_201_CREATED)
            except Exception:
                post_id = serializer.data['post'][0]
                saved_post_model = SavedPosts.objects.filter(author_id=payload['user_id'])[0]
                for post in saved_post_model.post.all():
                    if str(post.id) == str(post_id):
                        return Response({'message': 'Post is already saved'}, status=status.HTTP_409_CONFLICT)
                saved_post_model.post.add(Post.objects.get(id=post_id))
                return Response({'message': 'Post saved'}, status=status.HTTP_201_CREATED)

        if serializer.errors['post'][0].code == 'invalid':
            return Response({'message': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
        if serializer.errors['post'][0].code == 'required':
            return Response({'message': 'Invalid request parameters'}, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        queryset = SavedPosts.objects.filter(author_id=payload['user_id'])

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True, context={'request': request})
            return self.get_paginated_response(serializer.data)

        if queryset:
            serializer = self.get_serializer(queryset[0].post.all(), many=True)
            return Response(serializer.data)
        else:
            return Response([])

    def destroy(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        try:
            post_referred = Post.objects.get(id=kwargs['pk'])
            saved_post_referred_model = SavedPosts.objects.filter(author_id=payload['user_id'])[0]
            for saved_post in saved_post_referred_model.post.all():
                if saved_post == post_referred:
                    saved_post_referred_model.post.remove(post_referred)
                    return Response({'deleted_saved_post_id': kwargs['pk']})
            return Response({'message': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return Response({'message': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
