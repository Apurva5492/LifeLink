# LifeLink — Full-Stack Setup Guide

## Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+

---

## 1. Database Setup

```bash
# Connect to PostgreSQL and create the database
psql -U postgres
CREATE DATABASE lifelink;
\q

# Run the schema to create tables
psql -U postgres -d lifelink -f schema.sql
```

---

## 2. Backend Setup

```bash
cd backend

# Copy env file and fill in your values
copy .env.example .env
```

Edit `backend/.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lifelink
DB_USER=postgres
DB_PASSWORD=your_actual_password
PORT=3000
```

```bash
# Install dependencies
npm install

# Start the server
npm start

# Or for development with auto-reload
npm run dev
```

The backend will run at **http://localhost:3000**

---

## 3. Frontend

The Express server now serves the frontend files too.

After starting the backend, open:

```bash
http://localhost:3000/
```

You can still open the HTML files directly or use a local static server if you want, but the simplest setup is to use the backend URL above.

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/donors` | Register a new donor |
| `GET` | `/api/donors` | Search donors |
| `GET` | `/health` | Health check |

### POST `/api/donors` — Request Body
```json
{
  "fullname": "Jane Doe",
  "bloodGroup": "O+",
  "organ": "Kidney",
  "city": "Delhi",
  "phone": "+91 98765 43210",
  "email": "jane@example.com"
}
```

### GET `/api/donors` — Query Params
```
/api/donors?bloodGroup=O+&city=Delhi&organ=Kidney
```
All params are optional. Returns array of matching donors.

---

## Project Structure

```
LifeLink-main/
├── index.html          # Homepage (unchanged)
├── register.html       # Donor registration (API-connected)
├── find.html           # Donor search (API-connected)
├── *.css               # Stylesheets (unchanged)
├── script.js           # Shared JS (unchanged)
├── schema.sql          # PostgreSQL schema
└── backend/
    ├── server.js       # Express entry point
    ├── db.js           # PostgreSQL connection
    ├── .env.example    # Environment variable template
    ├── package.json
    └── routes/
        └── donors.js   # Donor API routes
```
