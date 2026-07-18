from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.database import engine, Base
from models.user import User
from routers.user import router as user_router
from routers.expense import router as expense_router
from models.expense import Expense
from routers.dashboard import router as dashboard_router

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router, prefix="/user", tags=["User"])
app.include_router(expense_router)
app.include_router(dashboard_router)

@app.get("/")
def home():
    return {
        "message": "AI Expense Tracker API is running"
    }