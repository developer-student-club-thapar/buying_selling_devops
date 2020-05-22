from rest_framework.serializers import ModelSerializer

from users.models import Profile, MyUser


class UserSerializer(ModelSerializer):
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


class ProfileDetailSerializer(ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']


class ProfileUpdateSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']
