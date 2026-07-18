from sqlalchemy.orm import Session
from sqlalchemy import func

from models.expense import Expense


def get_dashboard_summary(db: Session):

    total_expenses = db.query(Expense).count()

    total_amount = db.query(
        func.sum(Expense.amount)
    ).scalar()

    highest_expense = db.query(
        func.max(Expense.amount)
    ).scalar()

    return {
        "total_expenses": total_expenses,
        "total_amount": total_amount or 0,
        "highest_expense": highest_expense or 0
    }

def get_category_summary(db: Session):

    results = (
        db.query(
            Expense.category,
            func.sum(Expense.amount).label("total")
        )
        .group_by(Expense.category)
        .all()
    )

    return [
        {
            "category": row.category,
            "total": row.total
        }
        for row in results
    ]