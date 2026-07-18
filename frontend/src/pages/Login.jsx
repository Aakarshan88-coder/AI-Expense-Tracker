import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            console.log("Email:", email);
            console.log("Password:", password);

            const data = await loginUser(email, password);

            console.log("Response:", data);

            localStorage.setItem(
                "token",
                data.access_token
            );

            alert("Login Successful!");

            navigate("/dashboard");

        } catch (error) {

            console.log("Full Error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
            }

            alert("Invalid Credentials");

        }

    };

    return (

        <div style={{ padding: "40px" }}>

            <h1>Login</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}

export default Login;