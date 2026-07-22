from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer

from config.database import get_db
from schemas.user import UserCreate, UserLogin
from crud.user import (
    create_user,
    get_user_by_email,
    login_user
)
from utils.security import verify_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

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


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    return login_user(db, user)


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    email = verify_token(token)

    user = get_user_by_email(db, email)

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user


@router.get("/me")
def get_me(
    current_user=Depends(get_current_user)
):

    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email
    }