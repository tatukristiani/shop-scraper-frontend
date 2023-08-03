import React, { useEffect, useState } from "react";
import axios from "../utility/axios";

// TODO: Add HTTP status codes to responses and on 200 reroute to login and others show message from server
function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseFromServer, setResponseFromServer] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = { email: email, password: password };

        try {
            const request = await axios.post('account', user).then(response => {
                setEmail('');
                setPassword('');
                if (response.status === 201) {
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
            setResponseFromServer('');
        }
    }, [password, email])

    return (
        <div className="container">
            <h2>Register</h2>
            <br></br>
            <form method="post" onSubmit={handleRegister}>
                <div className="container">
                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label>
                    </div>
                    <div className="container">
                        <input type="email" placeholder="Enter email address" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="container">
                        <label htmlFor="password"><b>Password</b></label>
                    </div>
                    <div className="container">
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <br></br>
                    <button type="submit">Register</button>
                </div>
            </form>

            {responseFromServer}
        </div>
    )
}

export default RegisterPage;