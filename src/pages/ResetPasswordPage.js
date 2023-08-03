import React, { useState, useContext, useEffect } from "react";
import axios from "../utility/axios";
import { useParams } from 'react-router';

function ResetPasswordPage() {
    const params = useParams();
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password === confirmationPassword && params.id != null && params.token != null) {
            const body = {
                id: params.id,
                token: params.token,
                password: password
            };

            await axios.post("/account/reset-password", body, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    if (response.status === 200) {
                        setResponseMessage('Password successfully changed!');
                    } else {
                        setResponseMessage("Couldn't change password for some reason...");
                    }
                })
                .catch(error => {
                    setResponseMessage("Sorry... Something went wrong :(");
                });

        } else {
            setResponseMessage('Passwords need to match!');
        }
    }

    useEffect(() => {
        if (responseMessage.length > 0 && (password.length > 0 || confirmationPassword.length > 0)) {
            setResponseMessage('');
        }
    }, [password, confirmationPassword])

    useEffect(() => {
        if (responseMessage.length > 0) {
            setPassword('');
            setConfirmationPassword('');
        }
    }, [responseMessage])

    return (
        <div className="container">
            <h2>Reset Password</h2>
            <br></br>
            <form method="post" onSubmit={handleResetPassword}>
                <div className="container">
                    <div className="container">
                        <label htmlFor="password"><b>Enter your new password:</b></label>
                    </div>
                    <div className="container">
                        <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <br />
                    <div className="container">
                        <label htmlFor="confirmationPassword"><b>Confirm password:</b></label>
                    </div>
                    <div className="container">
                        <input type="password" name="confirmationPassword" value={confirmationPassword} onChange={(event) => setConfirmationPassword(event.target.value)} required />
                    </div>
                    <br />
                    <button type="submit">Change Password</button>
                </div>
            </form>
            <br />
            <p>{responseMessage}</p>
        </div>
    )
}

export default ResetPasswordPage;