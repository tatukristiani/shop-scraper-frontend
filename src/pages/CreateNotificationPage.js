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
                <div className="container">
                    <h3>Aseta sähköposti ilmoitus hakusanalla ja MAX hinnalla</h3>
                    <form method="post" onSubmit={createNotification}>
                        <label>Hakusana:</label>
                        <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                        <br></br>
                        <label>Hinta (MAX):</label>
                        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                        <br></br>
                        <input type="submit" value="Lisää ilmoitus" />
                    </form>

                    {responseFromServer}
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