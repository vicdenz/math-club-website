from django.urls import path
from . import views
from .views import CustomTokenObtainPairView

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
	path("", view=views.get_routes, name="home"),

    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
	
	path("events/", view=views.events_view, name="events"),
	path("contests/", view=views.contests_view, name="contests"),
	path("contact/", view=views.contact_view, name="contact"),
	path("sign-up/", view=views.sign_up_view, name="sign-up"),
	path("dashboard/", view=views.dashboard_view, name="dashboard"),
	path('profile/', view=views.profile_view, name='profile'),
]