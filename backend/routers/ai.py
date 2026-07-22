from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from config.database import get_db
from crud.expense import get_all_expenses
from routers.user import get_current_user
from services.gemini_service import generate_expense_insights

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/insights")
def get_ai_insights(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    expenses = get_all_expenses(
        db,
        current_user.id
    )

    insights = generate_expense_insights(expenses)

    return {
        "insights": insights
    }