from sqlalchemy.orm import Session
from sqlalchemy import func

from models.expense import Expense


def get_dashboard_summary(db: Session, user_id: int):

    total_expenses = db.query(Expense).filter(
        Expense.user_id == user_id
    ).count()

    total_amount = db.query(
        func.sum(Expense.amount)
    ).filter(
        Expense.user_id == user_id
    ).scalar()

    highest_expense = db.query(
        func.max(Expense.amount)
    ).filter(
        Expense.user_id == user_id
    ).scalar()

    return {
        "total_expenses": total_expenses,
        "total_amount": total_amount or 0,
        "highest_expense": highest_expense or 0
    }


def get_category_summary(db: Session, user_id: int):

    results = (
        db.query(
            Expense.category,
            func.sum(Expense.amount).label("total")
        )
        .filter(
            Expense.user_id == user_id
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