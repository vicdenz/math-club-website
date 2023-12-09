from django.urls import path
from . import views

urlpatterns = [
	path("", view=views.get_routes, name="home"),
	path("notes/", view=views.get_notes_view, name="notes"),
	# path("notes/create/", view=views.create_note, name="create_note"),
	# path("notes/<str:pk>/update/", view=views.update_note, name="update_note"),
	# path("notes/<str:pk>/delete/", view=views.delete_note, name="delete_note"),
	path("notes/<str:pk>/", view=views.get_note_view, name="note"),
]