from django.contrib import admin
from .models import Event, Contest, UserContest, Message

# Register your models here.

admin.site.register(Event)
admin.site.register(Contest)
admin.site.register(UserContest)
admin.site.register(Message)