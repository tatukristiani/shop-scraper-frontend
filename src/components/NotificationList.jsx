import React, { useState, useEffect } from "react";
import axios from "../utility/axios";
import Notification from "./Notification";
import "../styles/notification.css";

function NotificationList() {
    const [notifications, setNotifications] = useState([]);


    // Changes the active status of notification.
    const HandleActive = async (notification) => {
        if (notification.active === true) {
            notification.active = false;
        } else {
            notification.active = true;
        }

        try {
            const response = await axios.put(`notifications/${notification._id}`, notification);
            if (response.data) {
                fetchData();
            }
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    // Remove notification
    const RemoveNotification = async (notification) => {
        // Removes notification from db
        const response = await axios.delete(`notifications/${notification._id}`);
        if (response) {
            console.log("Removed");
            fetchData();
        } else {
            console.log("Error when removing");
        }

    }

    // Fetch notifications
    async function fetchData() {
        const response = await axios.get("notifications");
        if (response) {
            setNotifications(response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
            <ul>
                {notifications.map((n => (
                    <li>
                        <Notification notification={n} />
                        <button onClick={() => HandleActive(n)}>{n.active ? "Deactivate" : "Activate"}</button>
                        <button onClick={() => RemoveNotification(n)}>Remove</button>
                    </li>
                )))}
            </ul>
        </div>
    )
}


export default NotificationList;