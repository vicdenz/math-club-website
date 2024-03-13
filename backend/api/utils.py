from rest_framework import status
from rest_framework.response import Response

from django.contrib.auth.models import User

from .models import Event, Contest, UserContest, Message
from .serializers import EventSerializer, ContestSerializer, UserContestSerializer

from django.utils import timezone

def get_events(request):
	# future_events = Event.objects.filter(datetime__gte=timezone.now())
	future_events = Event.objects.all()
	serializer = EventSerializer(future_events, many=True)

	return Response(serializer.data, status=status.HTTP_200_OK)

def get_contests(request):
	# future_contests = Contest.objects.filter(datetime__gte=timezone.now())
	future_contests = Contest.objects.all()
	serializer = ContestSerializer(future_contests, many=True)
	
	return Response(serializer.data, status=status.HTTP_200_OK)

def post_message(request):
	data = request.data

	# Create a new message
	message = Message.objects.create(**data)

	return Response({'success': 'Message saved successfully.'}, status=status.HTTP_201_CREATED)

def sign_up(request):
	data = request.data
	username = data.get('username')
	password = data.get('password')

	if not username or not password:
		return Response({'error': 'Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

	# Check if the username is unique
	if User.objects.filter(username=username).exists():
		return Response({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

	# Create a new user
	user = User.objects.create_user(**data)

	return Response({'success': 'User registered successfully.'}, status=status.HTTP_201_CREATED)

def get_user_contests(request):
	user = request.user

	user_contests = UserContest.objects.filter(user=user)
	serializer = UserContestSerializer(user_contests, many=True)

	return Response(serializer.data, status=status.HTTP_200_OK)

def get_user_info(request):
	return Response("Hello from Profile Page")