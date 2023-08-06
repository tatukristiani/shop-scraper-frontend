import React, { useState, useContext } from "react";
import axios from "../utility/axios";
import { UserContext } from "../utility/UserContext.js";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const { savedUser, setSavedUser } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseFromServer, setResponseFromServer] = useState("");
    const navigate = useNavigate();

    const user = {
        email: userEmail,
        password: password
    }

    const handleLogin = async (e) => {
        e.preventDefault();


        const request = await axios.post('account/login', user, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.status === 200) {
                    setSavedUser(user.email);
                    setUserEmail('');
                    setPassword('');
                    navigate('/');
                } else {
                    setResponseFromServer("Invalid credentials!");
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setResponseFromServer("Invalid credentials!");
                } else {
                    setResponseFromServer("Sorry... Something went wrong :(");
                }
            });

    }


    return (
        <div className="container">
            <h2>Login</h2>
            <form method="post" onSubmit={handleLogin}>
                <div className="login-container">
                    <div className="login-div">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" placeholder="Enter email address" name="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} required />
                    </div>
                    <div className="login-div">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <br></br>
                    <button type="submit">Login</button>
                </div>

                <br></br>
                <div className="container">
                    <span><Link to="/forgot-password" className="nav-link px-4">Forgot password?</Link></span>
                </div>
            </form>

            <p>{responseFromServer}</p>
        </div>
    )
}

export default LoginPage;