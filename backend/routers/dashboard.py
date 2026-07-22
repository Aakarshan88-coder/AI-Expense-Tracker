from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from config.database import get_db
from crud.dashboard import (
    get_dashboard_summary,
    get_category_summary
)

from routers.user import get_current_user

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_dashboard_summary(
        db,
        current_user.id
    )


@router.get("/category-summary")
def category_summary(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_category_summary(
        db,
        current_user.id
    )