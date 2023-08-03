import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { UserContext } from "../utility/UserContext.js";

function NavigationBar() {
    const { savedUser, setSavedUser } = useContext(UserContext);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar">
                    <Link to="/" className="nav-link px-4">Search</Link>
                    <Link to="/notifications/create" className="nav-link px-4" >Create new notification</Link>
                    <Link to="/notifications" className="nav-link px-4" >Notifications</Link>
                    {savedUser ?
                        (
                            <Link to="/my-account" className="nav-link px-4">My Account</Link>
                        )
                        :
                        (
                            <>
                                <Link to="/register" className="nav-link px-4">Register</Link>
                                <Link to="/login" className="nav-link px-4">Login</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>


    )
}

export default NavigationBar;