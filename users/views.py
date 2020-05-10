from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import requests
from .models import MyUser


class GoogleView(APIView):
    def post(self, request):
        payload = {'access_token': request.data.get("token")}  # validate the token
        r = requests.get('https://www.googleapis.com/oauth2/v2/userinfo', params=payload)
        data = json.loads(r.text)

        print(data)

        if 'error' in data:
            content = {'message': 'wrong google token / this google token is already expired.'}
            return Response(content)

        try:
            user = MyUser.objects.get(email=data['email'])
        except Exception:
            if 'hd' in data:
                if data['hd'] == 'thapar.edu':
                    user = MyUser()
                    user.password = make_password(BaseUserManager().make_random_password())
                    user.email = data['email']
                    user.username = data['given_name']
                    user.firstName = data['given_name']
                    user.lastName = data['family_name']
                    user.save()
                else:
                    return Response({"error": "Not a thapar.edu email"})
            else:
                return Response({"error": "invalid email"})

        token = RefreshToken.for_user(user)
        response = {}
        response['username'] = user.username
        response['access_token'] = str(token.access_token)
        response['refresh_token'] = str(token)
        return Response(response)
