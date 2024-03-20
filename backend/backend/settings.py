import os

if os.environ.get("DJANGO_ENV") == "PRODUCTION":
	print("PRODUCTION SETTINGS")
	from .production_settings import *
else:
	print("LOCAL SETTINGS")
	from .local_settings import *