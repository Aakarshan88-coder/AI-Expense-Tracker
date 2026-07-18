import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getExpenseById,
    updateExpense
} from "../services/expense";

function EditExpense() {

    const { id } = useParams();

    const navigate = useNavigate();

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

            alert("Expense Updated Successfully");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

        }

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