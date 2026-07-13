from fastapi import FastAPI
from config.database import engine, Base
from models.user import User
from routers.user import router

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(router, prefix="/user", tags=["User"])

@app.get("/")
def home():
    return {
        "message": "AI Expense Tracker API is running"
    }