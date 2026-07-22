import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/auth";
import "./Signup.css";
import { toast } from "react-toastify";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await registerUser({

                full_name: name,
                email,
                password

            });

           toast.success("Registration Successful");

            navigate("/");

        }

        catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };

    return (

        <div className="signup-container">

            <div className="signup-card">

                <h2>🤖 AI Expense Tracker</h2>

                <p className="subtitle">
                    Create Your Account
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <button type="submit">

                        Register

                    </button>

                </form>

                <p className="login-text">

                    Already have an account?

                    <Link to="/">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Signup;