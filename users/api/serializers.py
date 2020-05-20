from rest_framework.serializers import ModelSerializer

from users.models import Profile


class ProfileDetailSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']


class ProfileUpdateSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['image', 'bio', 'year', 'branch']


class ProfileListSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch']
