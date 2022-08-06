import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavigationBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar">
                    <Link to="/" className="nav-link px-4">Search</Link>
                    <Link to="/notifications/create" className="nav-link px-4" >Create new notification</Link>
                    <Link to="/notifications" className="nav-link px-4" >Notifications</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;