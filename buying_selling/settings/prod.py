from .base import *

DEBUG = False

ALLOWED_HOSTS += ["*"]

DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
STATICFILES_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'

GS_BUCKET_NAME = env("GS_BUCKET_NAME")

STATIC_ROOT = "static/"

MEDIA_ROOT = "media/"
