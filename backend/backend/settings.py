import os

print("Debug:", os.environ)
current_env = os.environ.get("DJANGO_ENV")
if current_env == "PRODUCTION":
	print("PRODUCTION SETTINGS")
	from .production_settings import *
else:
	print("LOCAL SETTINGS")
	from .local_settings import *