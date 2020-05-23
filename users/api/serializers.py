from rest_framework.serializers import ModelSerializer

from users.models import Profile, MyUser


class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'username',
            'dateJoined',
            'firstName',
            'lastName',
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
    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']
