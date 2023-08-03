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
            <br></br>
            <form method="post" onSubmit={handleLogin}>
                <div className="container">
                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label>
                    </div>
                    <div className="container">
                        <input type="email" placeholder="Enter email address" name="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} required />
                    </div>
                    <div className="container">
                        <label htmlFor="password"><b>Password</b></label>
                    </div>
                    <div className="container">
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <br></br>
                    <button type="submit">Login</button>
                </div>

                <br></br>
                <div className="container">
                    <span><Link to="/forgot-password">Forgot password?</Link></span>
                </div>
            </form>

            {responseFromServer}
        </div>
    )
}

export default LoginPage;