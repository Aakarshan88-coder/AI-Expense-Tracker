import { useNavigate } from "react-router-dom";
import { deleteExpense } from "../services/expense";
import "./ExpenseTable.css";

function ExpenseTable({ expenses }) {

    const navigate = useNavigate();

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this expense?"
        );

        if (!confirmDelete) return;

        try {

            await deleteExpense(id);

            alert("Expense Deleted Successfully");

            window.location.reload();

        } catch (error) {

            console.log(error);

            alert("Failed to delete expense");

        }

    };

    return (

        <div className="table-container">

            <h2>Recent Expenses</h2>

            <table>

                <thead>

                    <tr>

                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {expenses.map((expense) => (

                        <tr key={expense.id}>

                            <td>{expense.category}</td>
                            <td>₹ {expense.amount}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>

                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() => navigate(`/edit-expense/${expense.id}`)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(expense.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ExpenseTable;