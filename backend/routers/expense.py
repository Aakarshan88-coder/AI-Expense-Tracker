from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from config.database import get_db
from schemas.expense import ExpenseCreate

from crud.expense import (
    create_expense,
    delete_expense,
    get_all_expenses,
    get_expense_by_id,
    update_expense,
)

from routers.user import get_current_user

router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"]
)


@router.post("/")
def add_expense(
    expense: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return create_expense(
        db=db,
        expense=expense,
        user_id=current_user.id
    )


@router.get("/")
def get_expenses(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return get_all_expenses(
        db=db,
        user_id=current_user.id
    )


@router.get("/{expense_id}")
def get_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return get_expense_by_id(
        db=db,
        expense_id=expense_id,
        user_id=current_user.id
    )


@router.put("/{expense_id}")
def edit_expense(
    expense_id: int,
    expense: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return update_expense(
        db=db,
        expense_id=expense_id,
        expense=expense,
        user_id=current_user.id
    )


@router.delete("/{expense_id}")
def remove_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return delete_expense(
        db=db,
        expense_id=expense_id,
        user_id=current_user.id
    )