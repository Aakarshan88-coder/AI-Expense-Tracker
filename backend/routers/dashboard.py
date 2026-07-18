from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from config.database import get_db
from crud.dashboard import (
    get_dashboard_summary,
    get_category_summary
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/summary")
def dashboard_summary(
    db: Session = Depends(get_db)
):
    return get_dashboard_summary(db)


@router.get("/category-summary")
def category_summary(
    db: Session = Depends(get_db)
):
    return get_category_summary(db)