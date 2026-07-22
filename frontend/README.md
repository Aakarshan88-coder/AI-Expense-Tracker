
🤖 AI Expense Tracker

A modern AI-powered Expense Tracker built with React, FastAPI, SQLAlchemy, and Google Gemini AI. This application helps users securely manage their daily expenses, visualize spending patterns, and receive AI-generated financial insights.

---

🚀 Features

🔐 Authentication

- User Signup
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes

💰 Expense Management

- Add Expense
- Edit Expense
- Delete Expense
- View All Expenses
- Category-wise Expense Tracking

📊 Dashboard

- Total Expenses
- Total Spending Amount
- Highest Expense
- Expense Pie Chart
- Monthly Expense Chart

🤖 AI Insights (Google Gemini)

- Spending Summary
- Highest Spending Category
- Unnecessary Spending Detection
- Personalized Saving Suggestions
- Overall Financial Health Analysis

---

🛠️ Tech Stack

Frontend

- React
- React Router DOM
- Axios
- Recharts
- CSS

Backend

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Passlib (bcrypt)
- Python Dotenv
- Google Gemini AI SDK

Tools

- Git
- GitHub
- Vite

---

📂 Project Structure

AI-Expense-Tracker
│
├── backend
│   ├── config
│   ├── crud
│   ├── models
│   ├── routers
│   ├── schemas
│   ├── services
│   ├── main.py
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md

---

⚙️ Installation

1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/AI-Expense-Tracker.git

---

2. Backend Setup

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

Create a ".env" file:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
SECRET_KEY=YOUR_SECRET_KEY

Run the backend:

uvicorn main:app --reload

---

3. Frontend Setup

cd frontend

npm install

npm run dev

---

📸 Screenshots

Add screenshots here after deployment.

- Login Page
- Signup Page
- Dashboard
- Add Expense
- Charts
- AI Insights

---

🎯 Future Improvements

- Expense Search
- Expense Filters
- Budget Management
- Export to PDF/Excel
- Email Reports
- Dark Mode
- Multi-Currency Support
- Cloud Database (PostgreSQL)

---

📖 What I Learned

- Building REST APIs using FastAPI
- JWT Authentication
- SQLAlchemy ORM
- React Routing and State Management
- Data Visualization using Recharts
- Secure Environment Variable Management
- Git & GitHub Workflow
- Integrating Google Gemini AI APIs

---

👨‍💻 Author

Aakarshan Bhutani

GitHub: https://github.com/Aakarshan88-coder

---

⭐ If you found this project useful, consider giving it a star!