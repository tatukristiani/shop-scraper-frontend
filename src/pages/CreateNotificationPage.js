import React, { useState } from "react";
import axios from "../utility/axios";

function CreateNotificationPage() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [responseFromServer, setResponseFromServer] = useState("");


    const createNotification = async (event) => {
        event.preventDefault();

        let notification = {
            product: productName,
            price: price,
            active: false
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
        <div className="container">
            <h3>Aseta sähköposti ilmoitus hakusanalla ja MAX hinnalla</h3>
            <form method="post" onSubmit={createNotification}>
                <label>Hakusana:</label>
                <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                <label>Hinta (MAX):</label>
                <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                <input type="submit" value="Lisää ilmoitus" />
            </form>

            {responseFromServer}
        </div>
    )
}

export default CreateNotificationPage;