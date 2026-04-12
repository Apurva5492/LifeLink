🩸 LifeLink — Emergency Blood & Organ Donation Platform

LifeLink is a full-stack web application designed to connect blood and organ donors with people in urgent need. It enables quick donor registration and efficient searching based on blood group, organ, and location — helping save lives during emergencies.

🚀 Features
🔍 Search donors by blood group, organ, and city
📝 Register as a blood/organ donor
⚡ Fast API-based backend with Express.js
🗄️ Secure data storage using PostgreSQL
🌐 Simple and responsive frontend interface
❤️ Designed for real-world emergency use cases
🛠️ Tech Stack

Frontend

HTML, CSS, JavaScript

Backend

Node.js
Express.js

Database

PostgreSQL
📁 Project Structure
LifeLink-main/
├── index.html          # Homepage
├── register.html       # Donor registration
├── find.html           # Donor search
├── *.css               # Styles
├── script.js           # Frontend logic
├── schema.sql          # Database schema
└── backend/
    ├── server.js       # Express server
    ├── db.js           # Database connection
    ├── .env.example    # Environment variables template
    ├── package.json
    └── routes/
        └── donors.js   # API routes
⚙️ Setup Instructions
1️⃣ Prerequisites
Node.js (v18+)
PostgreSQL (v14+)
2️⃣ Database Setup
psql -U postgres
CREATE DATABASE lifelink;
\q

psql -U postgres -d lifelink -f schema.sql
3️⃣ Backend Setup
cd backend

copy .env.example .env

Edit .env file:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=lifelink
DB_USER=postgres
DB_PASSWORD=your_actual_password
PORT=3000

Install dependencies:

npm install

Start server:

npm start

For development:

npm run dev
🌐 Running the Application

After starting the backend:

👉 Open in browser:

http://localhost:3000/
📡 API Endpoints
➤ Register Donor
POST /api/donors

Request Body:

{
  "fullname": "Jane Doe",
  "bloodGroup": "O+",
  "organ": "Kidney",
  "city": "Delhi",
  "phone": "+91 98765 43210",
  "email": "jane@example.com"
}
➤ Search Donors
GET /api/donors

Query Parameters:

/api/donors?bloodGroup=O+&city=Delhi&organ=Kidney

(All parameters are optional)

➤ Health Check
GET /health
💡 Use Case

LifeLink can be used in:

🚑 Emergency medical situations
🏥 Hospitals and blood banks
🧑‍⚕️ NGOs and donation drives
📱 Real-time donor search systems
🔮 Future Enhancements
📍 Location-based nearest donor detection
📞 One-click emergency contact system
🔐 Authentication & user profiles
📱 Mobile app integration
🚑 Ambulance booking system (planned)
🤝 Contributing

Contributions are welcome!

Fork the repository
Create a new branch
Make your changes
Submit a pull request

📜 License
This project is open-source and available under the MIT License.
