from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from config.database import get_db
from schemas.user import UserCreate,UserLogin
from crud.user import create_user, get_user_by_email,login_user
from fastapi.security import OAuth2PasswordBearer
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
def login (
    user:UserLogin,
    db:Session = Depends(get_db)
):
    return login_user(db,user)

def get_current_user(token: str = Depends(oauth2_scheme)):
    email = verify_token(token)
    return email

@router.get("/me")
def get_me(current_user: str = Depends(get_current_user)):
    return {
        "message": "Welcome",
        "email": current_user
    }