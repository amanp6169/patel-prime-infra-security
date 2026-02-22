# Patel Prime Infra & Security

Monorepo with frontend and backend ready for GitHub + hosting.

## Project structure

- `frontend/index.html` - static site UI
- `backend/server.js` - Express API + PostgreSQL insert endpoint
- `backend/.env.example` - environment variable template

## Local run

1. Backend setup:

```bash
cd backend
npm install
copy .env.example .env
# update .env values
node server.js
```

2. Frontend:

Open `frontend/index.html` in browser.

## GitHub push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy

- Backend: Render (root directory `backend`)
- Frontend: Netlify/Vercel (root directory `frontend`)

After backend deploy, replace `API_BASE_URL` in `frontend/index.html` with your live backend URL.
