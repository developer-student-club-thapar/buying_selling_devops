from .base import *

DEBUG = True

STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static_files")]
STATIC_ROOT = os.path.join(BASE_DIR, "static_root")
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
