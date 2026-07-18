from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate
from utils.security import hash_password,verify_password,create_access_token

def create_user(db: Session, user: UserCreate):
    new_user = User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


from utils.security import verify_password


def login_user(db: Session, user):
    existing_user = get_user_by_email(db, user.email)

    if not existing_user:
        return {"message": "User not found"}

    if not verify_password(user.password, existing_user.password):
        return {"message": "Incorrect password"}

    access_token = create_access_token(
    data={"sub": existing_user.email}
)

    return {
    "access_token": access_token,
    "token_type": "bearer"
}