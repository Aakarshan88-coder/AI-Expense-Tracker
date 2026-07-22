import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ExpensePieChart from "../components/ExpensePieChart";
import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
import ExpenseTable from "../components/ExpenseTable";

import { getDashboardSummary } from "../services/dashboard";
import { getExpenses } from "../services/expense";
import { getAIInsights } from "../services/ai";

import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [summary, setSummary] = useState(null);
    const [expenses, setExpenses] = useState([]);

    const [aiInsights, setAIInsights] = useState("");
    const [loadingAI, setLoadingAI] = useState(false);

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

    const generateInsights = async () => {

        try {

            setLoadingAI(true);

            const data = await getAIInsights();

            setAIInsights(data.insights);

        } catch (error) {

            console.log(error);

            alert("Failed to generate AI insights");

        } finally {

            setLoadingAI(false);

        }

    };

    if (!summary) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <div className="dashboard-header">

                    <div className="dashboard-title">

                        <h1>👋 Welcome Back</h1>

                        <p>
                            Track and manage your expenses efficiently.
                        </p>

                    </div>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/add-expense")}
                    >
                        + Add Expense
                    </button>

                </div>

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

                <div className="chart-grid">

                    <ExpensePieChart
                        expenses={expenses}
                    />

                    <MonthlyExpenseChart
                        expenses={expenses}
                    />

                </div>

                <div className="ai-section">

                    <button
                        className="ai-btn"
                        onClick={generateInsights}
                        disabled={loadingAI}
                    >
                        {loadingAI ? "Generating..." : "🤖 Generate AI Insights"}
                    </button>

                    {aiInsights && (

                        <div className="ai-card">

                            <h2>🤖 AI Financial Insights</h2>

                            <p
                                style={{
                                    whiteSpace: "pre-line"
                                }}
                            >
                                {aiInsights}
                            </p>

                        </div>

                    )}

                </div>

                <ExpenseTable
                    expenses={expenses}
                />

            </div>

        </>

    );

}

export default Dashboard;