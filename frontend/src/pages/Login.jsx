import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const data = await loginUser(email, password);

            localStorage.setItem(
                "token",
                data.access_token
            );

            toast.success("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h2>🤖 AI Expense Tracker</h2>

                <p className="subtitle">
                    Welcome Back
                </p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    Login
                </button>

                <p className="signup-text">

                    Don't have an account?

                    <Link to="/signup">

                        Sign Up

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;