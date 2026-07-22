import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../services/expense";
import "./AddExpense.css";
import { toast } from "react-toastify";

function AddExpense() {

    const navigate = useNavigate();

    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addExpense({

                amount: Number(amount),
                category,
                description,
                date

            });

            toast.success("Expense Added Successfully");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            alert("Failed to add expense");

        }

    };

    return (

        <div className="add-container">

            <div className="add-card">

                <h2>💰 Add Expense</h2>

                <p className="add-subtitle">

                    Track your daily spending.

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

                        + Add Expense

                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddExpense;