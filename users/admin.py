from django.contrib import admin

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserCreationForm
from .models import MyUser, Wishlist


class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm

    list_display = ('username', 'mobile', 'email', 'is_admin')
    list_filter = ('is_admin',)

    fieldsets = (
        (None, {'fields': ('email', 'username', 'mobile', 'password')}),
        ('Personal Info', {'fields': ('firstName', 'lastName', 'dateJoined')}),
        ('Permissions', {'fields': ('is_admin', 'is_staff', 'is_active')}),
    )
    search_fields = ('username', 'email', 'mobile')
    ordering = ('username', 'email')

    filter_horizontal = ()


admin.site.register(MyUser, UserAdmin)


admin.site.unregister(Group)


admin.site.register(Wishlist)
