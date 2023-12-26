from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .utils import *

@api_view(["GET"])
def get_routes(request):
	routes = [
		{
			"Endpoint": "/events",
			"Method": "GET",
			"Body": {},
			"Description": "All events available."
		},
		{
			"Endpoint": "/contests",
			"Method": "GET",
			"Body": {},
			"Description": "All contests available."
		},
		{
			"Endpoint": "/sign-up/",
			"Method": "POST",
			"Body": {
				"first_name": "string",
				"last_name": "string",
				"email": "string",
				"password": "string",
			},
			"Description": "Register a new user with a first name, last name, email, and password."
		},
		{
			"Endpoint": "/dashboard/",
			"Method": "GET",
			"Body": {
				"first_name": "string",
				"last_name": "string",
				"email": "string",
				"password": "string",
			},
			"Description": "View past contests and the user's distinction/medals."
		},
		{
			"Endpoint": "/profile/",
			"Method": "GET",
			"Body": {},
			"Description": "Retrieve the profile information of the authenticated user."
		},
		{
			"Endpoint": "/profile/",
			"Method": "PUT",
			"Body": {
				"name": "string",
				"bio": "string",
				"location": "string"
			},
			"Description": "Update a user's profile information."
		}
	]

	return Response(routes)

# Get Available Events
@api_view(["GET"])
def events_view(request):
	return get_events(request)

# Get Available Contests
@api_view(["GET"])
def contests_view(request):
	return get_contests(request)

# Signup
@api_view(["POST"])
def sign_up_view(request):
	return sign_up(request)

# Get User Contests
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard_view(request):
	return get_user_contests(request)

# Get User Profile
@api_view(["GET", "PUT"])
@permission_classes([IsAuthenticated])
def profile_view(request):
	return get_user_info(request)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
     serializer_class = MyTokenObtainPairSerializer