from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from config.database import get_db
from schemas.user import UserCreate
from crud.user import create_user, get_user_by_email
router = APIRouter()


@router.get("/")
def test():
    return {"message": "User Router Working"}

@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    existing_user = get_user_by_email(db, user.email)

    if existing_user:
        return {"message": "Email already registered"}

    return create_user(db, user)