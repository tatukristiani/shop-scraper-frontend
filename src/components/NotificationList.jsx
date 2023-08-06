import React, { useState, useEffect, useContext } from "react";
import axios from "../utility/axios";
import Notification from "./Notification";
import { UserContext } from "../utility/UserContext.js";

function NotificationList() {
    const [notifications, setNotifications] = useState([]);
    const { savedUser } = useContext(UserContext);
    const [userMessage, setUserMessage] = useState('');

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
        } catch (error) {
            setUserMessage("Sorry could not change the status of the notification.");
        }
    }


    // Remove notification
    const RemoveNotification = async (notification) => {
        // Removes notification from db
        const response = await axios.delete(`notifications/${notification._id}`);
        if (response) {
            await fetchData();
        }

    }

    // Fetch notifications
    async function fetchData() {

        const request = await axios.get(`notifications?email=${savedUser}`).then(response => {
            if (response.data.length > 0) {
                setNotifications(response.data);
            } else {
                setUserMessage("You don't have any notifications yet. Go and add some!");
            }
        }).catch(error => {
            setUserMessage("Something went wrong, sorry about this...");
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
            {notifications.length > 0 ? (
                <ul>
                    {notifications.map((n => (
                        <li>
                            <Notification notification={n} />
                            <button onClick={() => HandleActive(n)}>{n.active ? "Deactivate" : "Activate"}</button>
                            <button onClick={() => RemoveNotification(n)}>Remove</button>
                        </li>
                    )))}
                </ul>
            ) : (
                <p>{userMessage}</p>
            )}
        </div>
    )
}


export default NotificationList;