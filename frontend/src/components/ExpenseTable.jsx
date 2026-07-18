import { useNavigate } from "react-router-dom";
function ExpenseTable({ expenses }) {
const navigate = useNavigate();
    return (

        <div style={{ marginTop: "40px" }}>

            <h2>Recent Expenses</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

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

                    {
                        expenses.map((expense) => (

                            <tr key={expense.id}>

                                <td>{expense.category}</td>

                                <td>₹ {expense.amount}</td>

                                <td>{expense.description}</td>

                                <td>{expense.date}</td>
                                <td>

    <button
        onClick={() => navigate(`/edit-expense/${expense.id}`)}
    >
        Edit
    </button>

</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ExpenseTable;