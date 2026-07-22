import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_expense_insights(expenses):

    if not expenses:
        return "No expenses found. Please add some expenses first."

    expense_data = ""

    for expense in expenses:

        expense_data += (
            f"Category: {expense.category}, "
            f"Amount: ₹{expense.amount}, "
            f"Description: {expense.description}, "
            f"Date: {expense.date}\n"
        )

    prompt = f"""
You are a personal finance assistant.

Analyze the following expenses and provide:

1. Spending summary.
2. Highest spending category.
3. Unnecessary spending (if any).
4. 3 practical money-saving suggestions.
5. Overall financial health in 2-3 lines.

Expenses:

{expense_data}

Keep the answer short, professional and easy to understand.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text