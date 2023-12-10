## Math Club Website

---

#### Creating the virtual environment

--> Create a virtual environment :

```bash
virtualenv venv
```

--> Activate the virtual environment :

```bash
. env/bin/activate
```

--> Install all pip packages from requirements.txt :

```bash
pip install -r requirements.txt
```

#### Running the website

--> Move into the directory where we have the backend project files :

cd math_club

--> To run the backend Math Club Website, use :

```bash
python manage.py runserver
```

> The development server will be started at http://127.0.0.1:8000/

--> Then move into the directory where we have the frontend project files :

```bash
cd ..
cd frontend
```

--> To run the frontend React Website, use :

npm run dev

> Then, the web server will be started at http://localhost:3000/
