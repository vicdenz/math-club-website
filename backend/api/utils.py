from rest_framework import status
from rest_framework.response import Response

from .models import Event, Contest, UserContest
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

def sign_up(request):
	return Response("Hello from Signup Page")

def get_user_contests(request):
	user = request.user

	user_contests = UserContest.objects.filter(user=user)
	serializer = UserContestSerializer(user_contests, many=True)

	return Response(serializer.data, status=status.HTTP_200_OK)

def get_user_info(request):
	return Response("Hello from Profile Page")