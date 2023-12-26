from rest_framework import serializers
from .models import Event, Contest, UserContest

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class ContestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contest
        fields = '__all__'

class UserContestSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserContest
        fields = '__all__'