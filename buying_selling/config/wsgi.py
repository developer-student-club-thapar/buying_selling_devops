import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "buying_selling.config.settings")

application = get_wsgi_application()
