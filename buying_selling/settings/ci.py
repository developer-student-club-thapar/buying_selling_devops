from .base import *

SECRET_KEY = '!pyfta##&3@51#%t=c^7%in1p)n7m^d+(e$!au%*#1m7y5bmr#'

DEBUG = True

STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static_files")]
STATIC_ROOT = os.path.join(BASE_DIR, "static_root")
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
