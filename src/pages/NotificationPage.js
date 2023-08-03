import React, { useContext } from "react";
import { UserContext } from "../utility/UserContext.js";
import NotificationList from "../components/NotificationList";
import { Link } from "react-router-dom";

function NotificationPage() {
    const { savedUser } = useContext(UserContext);

    return (
        <div className="container">

            {savedUser ?
                (
                    <NotificationList />
                )
                :
                (
                    <div className="container">
                        <h2>You need to be logged in to view your notifications</h2>
                        <Link to="/login">Login</Link>
                    </div>
                )
            }
        </div>
    )
}

export default NotificationPage;