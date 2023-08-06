import React, { useEffect, useState } from "react";
import axios from "../utility/axios";

function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseFromServer, setResponseFromServer] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = { email: email, password: password };

        try {
            const request = await axios.post('account', user).then(response => {
                if (response.status === 201) {
                    console.log(1);
                    setResponseFromServer("Account created successfully!");
                } else {
                    setResponseFromServer("Failed to create an account... Try another email address perhaps.")
                }
            }).catch(error => {
                setResponseFromServer("Something went wrong, could not create an account...");
            })
        } catch (error) {
            console.log(error);
            setResponseFromServer("Something went wrong, could not create an account...");
        }
    }


    useEffect(() => {
        if (responseFromServer.length != 0) {
            setEmail('');
            setPassword('');
        }
    }, [responseFromServer])


    useEffect(() => {
        if (responseFromServer.length != 0 && (email != '' || password != '')) {
            console.log(2);
            setResponseFromServer('');
        }
    }, [password, email])

    return (
        <div className="container">
            <h2>Register</h2>
            <form method="post" onSubmit={handleRegister}>
                <div className="register-container">
                    <div className="register-div">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" placeholder="Enter email address" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="register-div">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <br></br>
                    <button type="submit">Register</button>
                </div>
            </form>
            <br />
            <p>{responseFromServer}</p>
        </div>
    )
}

export default RegisterPage;