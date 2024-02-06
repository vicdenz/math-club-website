from rest_framework import serializers
from .models import Event, Contest, UserContest
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

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

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
	@classmethod
	def get_token(cls, user):
		token = super().get_token(user)

		# Add custom claims
		token['username'] = user.username
		token['first_name'] = user.first_name
		token['last_name'] = user.last_name
		# ...
		
		return token