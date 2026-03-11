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

Build command:

```bash
pip install -r requirements.txt && python manage.py collectstatic --noinput
```

Start command:

```bash
gunicorn core.wsgi:application --bind 0.0.0.0:$PORT
```

Required Railway variables:

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG=False`
- `DJANGO_ALLOWED_HOSTS=<your-railway-domain>`
- `DJANGO_CORS_ALLOWED_ORIGINS=<your-vercel-domain>`
- `DJANGO_CSRF_TRUSTED_ORIGINS=<your-vercel-domain>`
- `DATABASE_URL=<railway-postgres-url>`

Recommended for persistent uploads:

- Attach a Railway volume
- Set `DJANGO_MEDIA_ROOT=/data/media`
- Keep `DJANGO_SERVE_MEDIA_FILES=True`

After the first deploy, run:

```bash
python manage.py migrate
python manage.py createsuperuser
```
