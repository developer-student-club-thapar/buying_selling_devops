from rest_framework.serializers import ModelSerializer, CharField

from buying_selling.users.models import Profile, MyUser, SavedPosts, Hostel


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


class HostelSerialiizer(ModelSerializer):
    class Meta:
        model = Hostel
        fields = ['id', 'name']


class MyProfileSerializer(ModelSerializer):

    user = UserProfileSerializer(read_only=True)
    hostel = HostelSerialiizer()

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']


class MyProfileUpdateSerializer(ModelSerializer):

    user = UserProfileSerializer(read_only=True)
    hostel = HostelSerialiizer()

    class Meta:
        model = Profile
        fields = ['user', 'image', 'bio', 'year', 'branch', 'hostel']

    def update(self, instance, validated_data):
        hostel_data = validated_data.pop('hostel')

        instance.image = validated_data.get('image', instance.image)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.year = validated_data.get('year', instance.year)
        instance.branch = validated_data.get('branch', instance.branch)
        instance.save()

        try:
            instance.hostel = Hostel.objects.get(name=hostel_data['name'])
            instance.save()
        except Exception:
            Hostel.objects.create(**hostel_data)
            instance.hostel = Hostel.objects.get(name=hostel_data['name'])
            instance.save()

        return instance


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
