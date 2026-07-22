from sqlalchemy.orm import Session

from models.expense import Expense
from schemas.expense import ExpenseCreate


def create_expense(db: Session, expense: ExpenseCreate, user_id: int):

    new_expense = Expense(
        amount=expense.amount,
        category=expense.category,
        description=expense.description,
        date=expense.date,
        user_id=user_id
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)

    return new_expense


def get_all_expenses(db: Session, user_id: int):

    return db.query(Expense).filter(
        Expense.user_id == user_id
    ).all()


def get_expense_by_id(
    db: Session,
    expense_id: int,
    user_id: int
):

    return db.query(Expense).filter(
        Expense.id == expense_id,
        Expense.user_id == user_id
    ).first()


def update_expense(
    db: Session,
    expense_id: int,
    expense: ExpenseCreate,
    user_id: int
):

    existing_expense = db.query(Expense).filter(
        Expense.id == expense_id,
        Expense.user_id == user_id
    ).first()

    if not existing_expense:
        return {"message": "Expense not found"}

    existing_expense.amount = expense.amount
    existing_expense.category = expense.category
    existing_expense.description = expense.description
    existing_expense.date = expense.date

    db.commit()
    db.refresh(existing_expense)

    return existing_expense


def delete_expense(
    db: Session,
    expense_id: int,
    user_id: int
):

    existing_expense = db.query(Expense).filter(
        Expense.id == expense_id,
        Expense.user_id == user_id
    ).first()

    if not existing_expense:
        return {"message": "Expense not found"}

    db.delete(existing_expense)
    db.commit()

    return {"message": "Expense deleted successfully"}