import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {

    return (

        <>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* Protected Routes */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-expense"
                    element={
                        <ProtectedRoute>
                            <AddExpense />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-expense/:id"
                    element={
                        <ProtectedRoute>
                            <EditExpense />
                        </ProtectedRoute>
                    }
                />

            </Routes>
  {/*
            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
                theme="colored"
            />
   */}
        </>

    );

}

export default App;