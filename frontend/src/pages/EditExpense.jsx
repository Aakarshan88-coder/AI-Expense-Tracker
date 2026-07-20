import { useState, useEffect } from "react";

import {
    getExpenseById,
    updateExpense
} from "../services/expense";

import {
    useNavigate,
    useParams
} from "react-router-dom";

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

        const expense = await getExpenseById(id);

        setAmount(expense.amount);
        setCategory(expense.category);
        setDescription(expense.description);
        setDate(expense.date);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await updateExpense(id, {

            amount: Number(amount),
            category,
            description,
            date

        });

        alert("Expense Updated Successfully");

        navigate("/dashboard");

    };

    return (

        <div className="dashboard">

            <h1>Edit Expense</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <br /><br />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <br /><br />

                <button type="submit">

                    Update Expense

                </button>

            </form>

        </div>

    );

}

export default EditExpense;