from rest_framework.serializers import ModelSerializer

from buying_selling.users.models import Profile, MyUser


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
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']


class ProfileDetailSerializer(ModelSerializer):

    user = UserDetailSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']


class ProfileUpdateSerializer(ModelSerializer):

    user = UserDetailSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']
