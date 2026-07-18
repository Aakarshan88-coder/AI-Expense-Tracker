import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

import "./App.css";

function App() {

    return (

        

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/add-expense"
                    element={<AddExpense />}
                />


                <Route
    path="/edit-expense/:id"
    element={<EditExpense />}
/>

            </Routes>

    

    );

}

export default App;