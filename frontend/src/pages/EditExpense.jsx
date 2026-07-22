import { useState, useEffect } from "react";
import {
    getExpenseById,
    updateExpense
} from "../services/expense";
import {
    useNavigate,
    useParams
} from "react-router-dom";

import "./AddExpense.css";
import { toast } from "react-toastify";

function EditExpense() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {

        loadExpense();

    }, []);

    const loadExpense = async () => {

        try {

            const expense = await getExpenseById(id);

            setAmount(expense.amount);
            setCategory(expense.category);
            setDescription(expense.description);
            setDate(expense.date);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateExpense(id, {

                amount: Number(amount),
                category,
                description,
                date

            });

            toast.success("Expense Updated Successfully");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            alert("Failed to update expense");

        }

    };

    return (

        <div className="add-container">

            <div className="add-card">

                <h2>✏️ Edit Expense</h2>

                <p className="add-subtitle">

                    Update your expense details.

                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="number"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />

                    <button type="submit">

                        💾 Update Expense

                    </button>

                </form>

            </div>

        </div>

    );

}

export default EditExpense;