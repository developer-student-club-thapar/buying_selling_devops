from rest_framework.serializers import ModelSerializer

from buying_selling.users.models import Profile, MyUser, SavedPosts
from buying_selling.posts.api.serializers import PostDetailSerializer, PostListSerializer


class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'username',
            'dateJoined',
            'firstName',
            'lastName',
        ]
        read_only_fields = [
            'username',
        ]


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'id',
            'username',
            'email',
            'mobile',
            'dateJoined',
            'firstName',
            'lastName',
        ]
        read_only_fields = ['id', 'email', 'username']


class MyProfileSerializer(ModelSerializer):

    user = UserProfileSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']


class ProfileDetailSerializer(ModelSerializer):

    user = UserDetailSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']


class ProfileUpdateSerializer(ModelSerializer):

    user = UserDetailSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']


class SavedPostCreateSerializer(ModelSerializer):

    class Meta:
        model = SavedPosts
        fields = ['post']


class SavedPostListSerializer(ModelSerializer):

    author = UserProfileSerializer()
    post = PostListSerializer()

    class Meta:
        model = SavedPosts
        fields = ['author', 'post']
