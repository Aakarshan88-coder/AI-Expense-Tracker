from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from config.database import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    category = Column(String)
    description = Column(String)
    date = Column(Date)

    user_id = Column(Integer, ForeignKey("users.id"))