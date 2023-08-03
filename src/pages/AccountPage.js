import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utility/UserContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utility/axios";

function AccountPage() {
    const { savedUser, setSavedUser } = useContext(UserContext);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [response, setResponse] = useState('');
    const [changeInProgress, setChangeInProgress] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = async (e) => {
        e.preventDefault();
        setChangeInProgress(true);

        const user = { operation: 'changeEmail', email: savedUser, value: newEmail };

        const request = await axios.patch('account', user, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.status === 200) {
                    setResponse("Changes made successfully!");
                } else {
                    setResponse("Changes couldn't be made for some reason...");
                }
            })
            .catch(error => {
                if (error.response.status === 409) {
                    setResponse("The email provided is already in use.")
                } else {
                    setResponse("Sorry... Something went wrong :(");
                }
            });

        setChangeInProgress(false);

    }

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setChangeInProgress(true);

        if (newPassword === confirmationPassword) {
            const user = { operation: 'changePassword', email: savedUser, value: newPassword };

            const request = await axios.patch('account', user, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    if (response.status === 200) {
                        setResponse("Changes made successfully!");
                    } else {
                        setResponse("Changes couldn't be made for some reason...");
                    }
                })
                .catch(error => {
                    setResponse("Sorry... Something went wrong :(");
                });

        } else {
            setResponse("The passwords need to match!");
        }

        setChangeInProgress(true);
    }

    const handleLogout = async (e) => {
        setSavedUser(null);
        navigate('/');
    }

    useEffect(() => {
        if (response.length != 0) {
            setResponse('');
        }
    }, [newPassword, confirmationPassword])

    useEffect(() => {
        if (response.length != 0) {
            setResponse('');
        }
    }, [newEmail])


    useEffect(() => {
        if (response.length != 0) {
            setChangeInProgress(false);
        }
    }, [response])

    return (
        <div className="container">

            {savedUser ?
                (
                    <div className="container">
                        <h2>Account Information</h2>
                        <form method="post" onSubmit={handleEmailChange}>
                            <div className="account-change-container">
                                <div className="container">
                                    <label htmlFor="email"><b>Email:</b></label>
                                </div>
                                <div className="container">
                                    <input type="email" placeholder={savedUser} name="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} required />
                                </div>
                                <br />
                                <button type="submit" disabled={changeInProgress}>Change Email</button>
                            </div>
                        </form>

                        <form method="post" onSubmit={handlePasswordChange}>
                            <div className="account-change-container">
                                <div className="container">
                                    <label htmlFor="password"><b>Password:</b></label>
                                </div>
                                <div className="container">
                                    <input type="password" name="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />
                                </div>
                                <div className="container">
                                    <label htmlFor="password-confirmation"><b>Confirm password:</b></label>
                                </div>
                                <div className="container">
                                    <input type="password" name="password-confirmation" value={confirmationPassword} onChange={(event) => setConfirmationPassword(event.target.value)} required />
                                </div>
                                <br />
                                <button type="submit" disabled={changeInProgress}>Change Password</button>
                            </div>
                        </form>

                        <br />
                        <br />

                        <button type="submit" onClick={handleLogout}>Logout</button>

                    </div>
                )
                :
                (
                    <div className="container">
                        <h2>You need to be logged in to view your accounts informations.</h2>
                        <Link to="/login">Login</Link>
                    </div>
                )
            }
            {response}
        </div>
    )
}

export default AccountPage;