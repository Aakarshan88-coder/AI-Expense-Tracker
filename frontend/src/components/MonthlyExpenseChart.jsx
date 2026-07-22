import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

function MonthlyExpenseChart({ expenses }) {

    const monthlyData = {};

    expenses.forEach((expense) => {

        const month = new Date(expense.date).toLocaleString(
            "default",
            { month: "short" }
        );

        if (monthlyData[month]) {

            monthlyData[month] += expense.amount;

        } else {

            monthlyData[month] = expense.amount;

        }

    });

    const chartData = Object.keys(monthlyData).map((month) => ({

        month,
        amount: monthlyData[month]

    }));

    return (

        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)"
            }}
        >

            <h2>Monthly Expenses</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart data={chartData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="amount"
                        fill="#2563eb"
                        radius={[8, 8, 0, 0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default MonthlyExpenseChart;