import { useEffect, useState } from "react";

import { getDashboardSummary } from "../services/dashboard";
import { getExpenses } from "../services/expense";

import SummaryCard from "../components/SummaryCard";
import ExpenseTable from "../components/ExpenseTable";

function Dashboard() {

    const [summary, setSummary] = useState(null);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {

        loadDashboard();
        loadExpenses();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboardSummary();

            setSummary(data);

        } catch (error) {

            console.log(error);

        }

    };

    const loadExpenses = async () => {

        try {

            const data = await getExpenses();

            setExpenses(data);

        } catch (error) {

            console.log(error);

        }

    };

    if (!summary) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <div className="dashboard">

            <h1>AI Expense Tracker</h1>
            <button

onClick={()=>window.location.href="/add-expense"}

>

Add Expense

</button>

            <div className="cards">

                <SummaryCard
                    title="Total Expenses"
                    value={summary.total_expenses}
                />

                <SummaryCard
                    title="Total Amount"
                    value={`₹ ${summary.total_amount}`}
                />

                <SummaryCard
                    title="Highest Expense"
                    value={`₹ ${summary.highest_expense}`}
                />

            </div>

            <ExpenseTable expenses={expenses} />

        </div>

    );

}

export default Dashboard;