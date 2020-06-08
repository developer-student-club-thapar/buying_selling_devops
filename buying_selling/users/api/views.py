from buying_selling.users.models import Profile, SavedPosts
from buying_selling.posts.models import Post
from .serializers import MyProfileSerializer, ProfileDetailSerializer, ProfileUpdateSerializer, SavedPostCreateSerializer
from buying_selling.posts.api.serializers import PostListSerializer

from .permissions import IsOwnerOrReadOnly

# from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import jwt
from django.conf import settings


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SIGNING_KEY, algorithms=['HS256'])


class MyProfileAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = MyProfileSerializer
    permission_classes = (IsAuthenticated,)

    def retrieve(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        instance = Profile.objects.get(user_id=payload['user_id'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class ProfileDetailAPIView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileDetailSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated,)


class ProfileUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer
    lookup_field = 'user'
    permission_classes = (IsAuthenticated,)

    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop('partial', False)
    #     payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
    #     instance = Profile.objects.get(user_id=payload['user_id'])
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #
    #     if getattr(instance, '_prefetched_objects_cache', None):
    #         # If 'prefetch_related' has been applied to a queryset, we need to
    #         # forcibly invalidate the prefetch cache on the instance.
    #         instance._prefetched_objects_cache = {}
    #
    #     return Response(serializer.data)

    def perform_update(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])


# class ProfileUpdateAPIView(UpdateAPIView):
#     permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
#     def patch(self, request, *args, **kwargs):
#         payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
#         instance = Profile.objects.get(user_id=payload['user_id'])
#         serializer = ProfileUpdateSerializer(instance, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)


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

    def perform_create(self, serializer):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        serializer.save(author_id=payload['user_id'])

    def list(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers['Authorization'].split()[1])
        queryset = SavedPosts.objects.filter(author_id=payload['user_id'])

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True, context={'request': request})
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset[0].post.all(), many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        post_referred = Post.objects.get(id=kwargs['pk'])
        saved_post = SavedPosts.objects.filter(post=post_referred)[0]
        saved_post.delete()
        return Response({'deleted_saved_post_id': kwargs['pk']})
