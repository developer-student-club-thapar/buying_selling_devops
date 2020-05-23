from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'buying_selling.users'

    def ready(self):
        import buying_selling.users.signals  # noqa
