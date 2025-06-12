build:
	docker build -t music-studio-pro .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
