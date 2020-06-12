from rest_framework.serializers import ModelSerializer, CharField

from buying_selling.users.models import Profile, MyUser, SavedPosts


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
    hostel = CharField(source='hostel.name', read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']


class ProfileDetailSerializer(ModelSerializer):

    user = UserDetailSerializer(read_only=True)
    hostel = CharField(source='hostel.name', read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']


class SavedPostCreateSerializer(ModelSerializer):
    class Meta:
        model = SavedPosts
        fields = ['post']
