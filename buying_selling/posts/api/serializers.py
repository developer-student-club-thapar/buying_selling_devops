from rest_framework.serializers import ModelSerializer, SerializerMethodField

from buying_selling.posts.models import Post, PostImage, Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            "id",
            "name",
        ]


class ImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = [
            "image",
        ]


class AddImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = [
            "post",
            "image",
        ]


class MyPostListSerializer(ModelSerializer):
    image = SerializerMethodField("image_serializer")
    category = CategorySerializer(read_only=True, many=True)

    def image_serializer(self, obj):
        image = PostImage.objects.filter(post_id=obj.id).first()
        serializer = ImageSerializer(image).data
        request = self.context.get("request")
        if serializer["image"]:
            serializer["image"] = request.build_absolute_uri(serializer["image"])
        return serializer

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "category",
            "datePosted",
            "author",
            "enabled",
            "price",
            "isSold",
            "image",
            "brand",
        ]


class PostCreateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "description",
            "category",
            "price",
            "isSold",
            "onDiscount",
            "discountPercent",
            "age",
            "brand",
            "condition",
        ]


class PostDetailSerializer(ModelSerializer):
    category = CategorySerializer(read_only=True, many=True)
    condition = SerializerMethodField("get_condition")
    age = SerializerMethodField("get_age")

    def get_condition(self, obj):
        return obj.get_condition_display()

    def get_age(self, obj):
        return obj.get_age_display()

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "description",
            "category",
            "datePosted",
            "author",
            "price",
            "isSold",
            "onDiscount",
            "discountPercent",
            "age",
            "brand",
            "condition",
        ]


class PostListSerializer(ModelSerializer):
    image = SerializerMethodField("image_serializer")
    category = CategorySerializer(read_only=True, many=True)

    def image_serializer(self, obj):
        image = PostImage.objects.filter(post_id=obj.id).first()
        serializer = ImageSerializer(image).data
        request = self.context.get("request")
        if serializer["image"]:
            serializer["image"] = request.build_absolute_uri(serializer["image"])
        return serializer

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "category",
            "datePosted",
            "author",
            "price",
            "isSold",
            "image",
            "brand",
        ]


class PostUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "description",
            "category",
            "price",
            "isSold",
            "onDiscount",
            "discountPercent",
            "age",
            "brand",
            "condition",
        ]
