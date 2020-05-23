from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'backend.users'

    def ready(self):
        import backend.users.signals  # noqa
