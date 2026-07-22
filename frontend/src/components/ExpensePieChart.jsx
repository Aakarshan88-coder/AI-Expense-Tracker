import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
    "#2563eb",
    "#22c55e",
    "#f97316",
    "#dc2626",
    "#9333ea",
    "#14b8a6"
];

function ExpensePieChart({ expenses }) {

    const categoryMap = {};

    expenses.forEach((expense) => {

        if (categoryMap[expense.category]) {

            categoryMap[expense.category] += expense.amount;

        } else {

            categoryMap[expense.category] = expense.amount;

        }

    });

    const chartData = Object.keys(categoryMap).map((category) => ({

        name: category,
        value: categoryMap[category]

    }));

    return (

        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
                marginTop: "30px"
            }}
        >

            <h2>Expenses by Category</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <PieChart>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label
                    >

                        {
                            chartData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))
                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ExpensePieChart;