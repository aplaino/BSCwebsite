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

## Railway Deployment

Use a Railway service rooted at `backend/`.

This repo includes [railway.json](/Users/andreas/Projects/BSCwebsite/backend/railway.json) with the build and start commands preconfigured for a Railway service rooted at `backend/`.

Required Railway variables:

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG=False`
- `DJANGO_ALLOWED_HOSTS=<your-railway-domain>`
- `DJANGO_CORS_ALLOWED_ORIGINS=<your-vercel-domain>`
- `DJANGO_CSRF_TRUSTED_ORIGINS=<your-vercel-domain>`
- `DATABASE_URL=<railway-postgres-url>`
- `DJANGO_FRONTEND_SITE_URL=<your-vercel-domain>`
- `DJANGO_EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend`
- `DJANGO_EMAIL_HOST=smtp.gmail.com`
- `DJANGO_EMAIL_PORT=587`
- `DJANGO_EMAIL_USE_TLS=True`
- `DJANGO_EMAIL_HOST_USER=<your-gmail-address>`
- `DJANGO_EMAIL_HOST_PASSWORD=<your-google-app-password>`
- `DJANGO_DEFAULT_FROM_EMAIL=Buster's Sea Cove <your-gmail-address>`

Recommended for persistent uploads:

- Attach a Railway volume
- Set `DJANGO_MEDIA_ROOT=/data/media`
- Keep `DJANGO_SERVE_MEDIA_FILES=True`

After the first deploy, run:

```bash
python manage.py migrate
python manage.py createsuperuser
```

Suggested service settings:

- Source repo root: this repository
- Root directory: `backend`
- Watch paths: `backend/**`
- Health check path: `/admin/`
