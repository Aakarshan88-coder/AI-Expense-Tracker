import { useState } from "react";

import { addExpense } from "../services/expense";

import { useNavigate } from "react-router-dom";

function EditExpense(){

    const navigate=useNavigate();

    const [amount,setAmount]=useState("");

    const [category,setCategory]=useState("");

    const [description,setDescription]=useState("");

    const [date,setDate]=useState("");

    const handleSubmit=async(e)=>{

        e.preventDefault();

        await addExpense({

            amount:Number(amount),

            category,

            description,

            date

        });

        alert("Expense Added Successfully");

        navigate("/dashboard");

    };

    return(

        <div className="dashboard">

            <h1>Edit Expense</h1>

            <form onSubmit={handleSubmit}>

                <input

                type="number"

                placeholder="Amount"

                value={amount}

                onChange={(e)=>setAmount(e.target.value)}

                />

                <br/><br/>

                <input

                placeholder="Category"

                value={category}

                onChange={(e)=>setCategory(e.target.value)}

                />

                <br/><br/>

                <input

                placeholder="Description"

                value={description}

                onChange={(e)=>setDescription(e.target.value)}

                />

                <br/><br/>

                <input

                type="date"

                value={date}

                onChange={(e)=>setDate(e.target.value)}

                />

                <br/><br/>

                <button>

                 Update Expense

                </button>

            </form>

        </div>

    );

}

export default EditExpense;