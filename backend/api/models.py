from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
	name = models.CharField(max_length=200)
	room = models.PositiveIntegerField()
	datetime = models.DateTimeField()
	description = models.CharField(max_length=500)

class Contest(models.Model):
	name = models.CharField(max_length=200)
	provider = models.CharField(max_length=100)
	short_provider = models.CharField(max_length=20, blank=True, null=True)
	room = models.PositiveIntegerField()
	datetime = models.DateTimeField()
	deadline = models.DateField()
	description = models.CharField(max_length=500)

class UserContest(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
	score = models.PositiveIntegerField(blank=True, null=True)
	medal = models.BooleanField(blank=True, null=True)
	distinction = models.BooleanField(blank=True, null=True)