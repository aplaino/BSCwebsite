# Buster's Sea Cove Website

Production-style restaurant website with:
- React + TypeScript + Vite frontend
- Django + Django REST Framework backend
- Catering/contact lead capture
- Food truck PDF menu support

## Repository Structure

```text
BSCwebsite/
  backend/    # Django API + admin + media
  frontend/   # React app (Vite)
```

## Prerequisites

- Node.js 18+ and npm
- Python 3.11+ (3.12/3.13 also fine)

## Quick Start (Local Development)

### 1. Start Backend (Django)

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

Backend will run on:
- `http://127.0.0.1:8000`

### 2. Start Frontend (Vite)

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend will run on:
- `http://localhost:5173`

## Environment Variables

### Backend (`backend/.env`)
Use `backend/.env.example` as the base.

Important keys:
- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DJANGO_CORS_ALLOWED_ORIGINS`
- `DJANGO_CSRF_TRUSTED_ORIGINS`
- `DJANGO_EMAIL_*`

### Frontend (`frontend/.env`)
Use `frontend/.env.example` as the base.

Important key:
- `VITE_API_BASE_URL` (example: `http://127.0.0.1:8000/api`)

## Email Behavior

By default, backend email uses console mode (safe for local testing):
- `DJANGO_EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend`

To send real emails, switch to SMTP in `backend/.env` and set valid credentials.

## Common Commands

### Frontend

```bash
cd frontend
npm run dev
npm run build
npm run lint
```

### Backend

```bash
cd backend
source .venv/bin/activate
python manage.py runserver
python manage.py check
python manage.py migrate
```

## API Endpoints

- `POST /api/contact/submit/`
- `POST /api/catering/submit/`
- `GET /api/restaurant/foodtruckmenu/`

## Deployment Notes

- Set `DJANGO_DEBUG=False` in production.
- Set a strong production `DJANGO_SECRET_KEY`.
- Configure `DJANGO_ALLOWED_HOSTS`, `DJANGO_CORS_ALLOWED_ORIGINS`, and `DJANGO_CSRF_TRUSTED_ORIGINS` for your domain.
- Use HTTPS in production and configure reverse proxy/static hosting accordingly.
