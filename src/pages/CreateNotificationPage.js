import React, { useState, useContext } from "react";
import axios from "../utility/axios";
import { UserContext } from "../utility/UserContext.js";
import { Link } from "react-router-dom";


function CreateNotificationPage() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [responseFromServer, setResponseFromServer] = useState("");
    const { savedUser } = useContext(UserContext);

    const createNotification = async (event) => {
        event.preventDefault();

        let notification = {
            product: productName,
            price: price,
            active: false,
            email: savedUser
        };

        try {
            const response = await axios.post("notifications", notification);
            setResponseFromServer(response.data.toString());
        } catch (err) {
            setResponseFromServer(err.toString());
        }
        setPrice(0);
        setProductName("");
    }

    return (
        <>
            {savedUser ? (
                <div className="notification-create-container">
                    <h3>Set the product name and max price to create a new notification</h3>
                    <form method="post" onSubmit={createNotification}>
                        <label>Product:</label>
                        <br />
                        <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                        <br />
                        <br />
                        <label>Price (MAX):</label>
                        <br />
                        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                        <br />
                        <br />
                        <input type="submit" value="Create" />
                    </form>
                    <br />
                    {<p>{responseFromServer}</p>}
                </div>
            ) : (
                <div className="container">
                    <h2>You need to be logged in to create a notification</h2>
                    <Link to="/login">Login</Link>
                </div>
            )}
        </>
    )
}

export default CreateNotificationPage;