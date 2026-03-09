# Backend (Django)

## Run Locally

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

Default local URL: `http://127.0.0.1:8000`

## Health Check

```bash
python manage.py check
```

## Environment

Use `backend/.env.example` as your reference for required Django and email settings.
