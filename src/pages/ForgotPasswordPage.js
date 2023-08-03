import React, { useState, useContext, useEffect } from "react";
import axios from "../utility/axios";

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [messageToUser, setMessageToUser] = useState('');


    const handleResetPassword = (e) => {
        e.preventDefault();

        const data = { email: email };
        axios.post("/account/reset-password-request", data);
        setMessageToUser("Password reset request sent. Check your inbox.");
    }

    useEffect(() => {
        if (messageToUser.length != 0) {
            setMessageToUser('');
        }
    }, [email])

    return (
        <div className="container">
            <h2>Forgot your password?</h2>
            <p>Enter your email address. If you have an account created, an email will be sent to your inbox where you will receive a link to reset your password.</p>
            <br></br>
            <form method="post" onSubmit={handleResetPassword}>
                <div className="container">
                    <div className="container">
                        <label htmlFor="email"><b>Enter your email address:</b></label>
                    </div>
                    <div className="container">
                        <input type="email" placeholder="Enter email address" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <br />
                    <button type="submit">Reset Password</button>
                </div>
            </form>
            <br />
            {messageToUser}
        </div>
    )
}

export default ForgotPasswordPage;