import React, { useState, useEffect } from "react";
import NotificationList from "../components/NotificationList";
import axios from "../utility/axios";

function NotificationPage() {
    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
        // Fetch notifications
        async function fetchData() {
            const response = await axios.get("notifications");
            if (response) {
                setNotifications(response.data);
            }
        }
        fetchData();

    }, [])

    return (
        <div className="container">
            <NotificationList notifications={notifications} />
        </div>
    )
}

export default NotificationPage;