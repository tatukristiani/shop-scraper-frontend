import React, { useState, useEffect } from "react";
import axios from "axios";

function Notification({ notification }) {
    const [thisNotification, setThisNotification] = useState(notification);

    // Changes the active status of notification.
    const HandleActive = async () => {
        if (thisNotification.active === true) {
            thisNotification.active = false;
        } else {
            thisNotification.active = true;
        }

        try {
            const response = await axios.put(`notifications/${thisNotification._id}`, thisNotification);
            if (response.data) {
                setThisNotification(response.data);
            }
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    // Remove notification
    const RemoveNotification = async () => {
        // Removes notification from db
        const response = await axios.delete(`notifications/${thisNotification._id}`);
        if (response) {
            console.log("Removed");
        } else {
            console.log("Error when removing");
        }

    }

    useEffect(() => {
        setThisNotification(notification);
    }, [notification, thisNotification])

    return (
        <li>
            <div>{thisNotification.product}</div>
            <div>{thisNotification.price}</div>
            <div>{thisNotification.active ? "Active" : "Disabled"}</div>
            <button onClick={HandleActive}>{thisNotification.active ? "Deactivate" : "Activate"}</button>
            <button onClick={RemoveNotification}>Remove</button>
        </li>

    )
}


export default Notification;