from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Note
from .serializers import NoteSerializer

from .utils import get_notes, get_note, create_note, update_note, delete_note

# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE
@api_view(['GET'])
def get_routes(request):
	routes = [
		{
			'Endpoint': '/notes/',
			'method': 'GET',
			'body': None,
			'description': 'Returns an array of notes'
		},
		{
			'Endpoint': '/notes/id',
			'method': 'GET',
			'body': None,
			'description': 'Returns a single note object'
		},
		{
			'Endpoint': '/notes/',
			'method': 'POST',
			'body': {'body': ""},
			'description': 'Creates new note with data sent in post request'
		},
		{
			'Endpoint': '/notes/id/',
			'method': 'PUT',
			'body': {'body': ""},
			'description': 'Creates an existing note with data sent in put request'
		},
		{
			'Endpoint': '/notes/id/',
			'method': 'DELETE',
			'body': None,
			'description': 'Deletes an exiting note'
		},
	]

	return Response(routes)

@api_view(["GET", "POST"])
def get_notes_view(request):
	method = request.method

	if method == "GET":
		return get_notes(request)

	if method == "POST":
		return create_note(request)

@api_view(["GET", "PUT", "DELETE"])
def get_note_view(request, pk):
	method = request.method

	if method == "GET":
		return get_note(request, pk)
	
	if method == "PUT":
		return update_note(request, pk)
	
	if method == "DELETE":
		return delete_note(request, pk)

# @api_view(["POST"])
# def create_note(request):
# 	data = request.data
# 	note = Note.objects.create(
# 		body=data['body']
# 	)
# 	serializer = NoteSerializer(note, many=False)

# 	return Response(serializer.data)

# @api_view(["PUT"])
# def update_note(request, pk):
# 	data = request.data
# 	note = Note.objects.get(id=pk)
# 	serializer = NoteSerializer(instance=note, data=data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)

# @api_view(["DELETE"])
# def delete_note(request, pk):
# 	data = request.data
# 	note = Note.objects.get(id=pk)
# 	note.delete()

# 	return Response("Note deleted successfully!")