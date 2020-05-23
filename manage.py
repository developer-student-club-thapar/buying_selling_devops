#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import environ

env = environ.Env()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))

DJANGO_ENV = env('DJANGO_ENV')


def main():
    if DJANGO_ENV == "PRODUCTION":
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "buying_selling.settings.prod")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "buying_selling.settings.dev")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError("Couldn't import Django. Are you sure it's installed and " "available on your PYTHONPATH environment variable? Did you " "forget to activate a virtual environment?") from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
