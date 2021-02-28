from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import exceptions
import jwt
from django.conf import settings
import requests
from .models import MyUser


class HelloView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        return Response({"message": "hi"})


# - Use the following APIs while generating access token on Google OAuth playground -
#       https://www.googleapis.com/auth/userinfo.email
#       https://www.googleapis.com/auth/userinfo.profile
class GoogleView(APIView):
    def post(self, request):
        payload = {"access_token": request.data.get("token")}  # validate the token
        r = requests.get("https://www.googleapis.com/oauth2/v2/userinfo", params=payload)
        data = json.loads(r.text)

        if "error" in data:
            content = {"message": "wrong google token / this google token is already expired."}
            return Response(content)

        try:
            user = MyUser.objects.get(email=data["email"])
        except Exception:
            if "hd" in data:
                if data["hd"] == "thapar.edu":
                    user = MyUser()
                    user.password = make_password(BaseUserManager().make_random_password())
                    user.email = data['email']
                    user.username = data['given_name'] + data['id']
                    user.firstName = data['given_name']
                    user.lastName = data['family_name']
                    user.save()
                else:
                    return Response({"error": "Not a thapar.edu email"})
            else:
                return Response({"error": "invalid email"})

        token = RefreshToken.for_user(user)

        response = Response()
        response["username"] = user.username
        response["access_token"] = str(token.access_token)

        # set the refresh token as a http-only cookie
        response.set_cookie(key='refreshtoken', value=str(token), httponly=True)

        return response


class RefreshTokenView(APIView):
    """
    Used to generate a new access token from the
    refresh token stored in the http only cookie
    """

    def post(self, request):
        refresh_token = request.COOKIES.get('refreshtoken')
        if refresh_token is None:
            raise exceptions.AuthenticationFailed('Authentication credentials were not provided.')
        try:
            payload = jwt.decode(refresh_token, settings.SIGNING_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed('expired refresh token, please login again.')

        user = MyUser.objects.get(id=payload.get('user_id'))
        if user is None:
            raise exceptions.AuthenticationFailed('User not found')

        if not user.is_active:
            raise exceptions.AuthenticationFailed('user is inactive')

        token = RefreshToken.for_user(user)
        response = Response()
        response["username"] = user.username
        response["access_token"] = str(token.access_token)

        return response
