from .base import *
from .jwt_settings import JWT_CONFIG

DEBUG = False

ALLOWED_HOSTS += ["*"]

DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
STATICFILES_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'

GS_BUCKET_NAME = env("GS_BUCKET_NAME")

STATIC_ROOT = "static/"

MEDIA_ROOT = "media/"

# JWT SETTINGS
SIMPLE_JWT = JWT_CONFIG
