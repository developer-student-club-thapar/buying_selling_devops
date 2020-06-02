from rest_framework.serializers import ModelSerializer

from buying_selling.posts.models import Post, PostImage, Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
        ]


class ImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = [
            'image',
        ]


class AddImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = [
            'post',
            'image',
        ]


class PostCreateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'description',
            'category',
            'price',
            'isSold',
            'onDiscount',
            'discountPercent',
            'age',
            'brand',
            'condition',
        ]


class PostDetailSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'description',
            'category',
            'datePosted',
            'author',
            'price',
            'isSold',
            'onDiscount',
            'discountPercent',
            'age',
            'brand',
            'condition',
        ]


class PostListSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'category',
            'datePosted',
            'author',
            'price',
            'isSold',
        ]


class PostUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'description',
            'category',
            'price',
            'isSold',
            'onDiscount',
            'discountPercent',
            'age',
            'brand',
            'condition',
        ]
