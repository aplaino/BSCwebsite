# Frontend (React + Vite)

## Run Locally

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Default local URL: `http://localhost:5173`

## Build

```bash
npm run build
```

## Environment

`VITE_API_BASE_URL` should point to backend API base, for example:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```
