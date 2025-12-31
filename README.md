📌 AuthFlow – Secure Task Management Dashboard

AuthFlow is a full-stack secure task management dashboard built using the MERN stack.
It implements JWT-based authentication, protected routes, and user-specific task management with a clean, dark, professional UI.

This project demonstrates real-world backend + frontend integration, not just UI screens.

🚀 Features
🔐 Authentication & Security

User Registration & Login

JWT-based authentication

Protected routes (frontend & backend)

Secure logout functionality

👤 User Profile

Fetch logged-in user details using token

Auto logout on invalid/expired token

✅ Task Management

Create tasks

View tasks specific to logged-in user

Mark tasks as completed

Delete tasks

Live task statistics:

Total tasks

Completed tasks

Pending tasks

📊 Dashboard

Dark professional UI

Real-time task statistics

Clean sidebar layout

Responsive design

🛠️ Tech Stack
Frontend

React.js (Vite)

TypeScript

Axios

React Router DOM

Inline CSS (Dark UI)

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT Authentication

bcryptjs

📂 Project Structure
authflow-secure-dashboard/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
└── README.md
⚙️ Environment Setup
1️⃣ Clone the repository
git clone https://github.com/yogita-jangid/authflow-secure-dashboard.git
cd authflow-secure-dashboard

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000

🔑 API Endpoints
Authentication

POST /api/auth/register – Register user

POST /api/auth/login – Login user

Profile

GET /api/profile/me – Fetch logged-in user (Protected)

Tasks

GET /api/tasks – Get user tasks (Protected)

POST /api/tasks – Create task (Protected)

PUT /api/tasks/:id – Update task status (Protected)

DELETE /api/tasks/:id – Delete task (Protected)

🧪 Test Credentials (Demo)
Email: test@example.com
Password: password123

👩‍💻 Author

Yogita Jangid
Engineering Student | Full Stack Developer
GitHub: https://github.com/yogita-jangid

⭐ If you like this project

Don’t forget to star the repository ⭐

🔒 License

This project is open-source and free to use for learning and development.