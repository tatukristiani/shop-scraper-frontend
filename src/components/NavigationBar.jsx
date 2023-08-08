import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utility/UserContext.js";
import { BsArrowRightSquare } from "react-icons/bs";
import { RiAlignJustify } from "react-icons/ri";


function NavigationBar() {
    const { savedUser, setSavedUser } = useContext(UserContext);
    const [menuButtonClicked, setMenuButtonClicked] = useState(false);

    const toggleMenuButton = () => {
        if (menuButtonClicked) {
            setMenuButtonClicked(false);
        } else {
            setMenuButtonClicked(true);
        }
    }

    const disableHamburberMenu = () => {
        setMenuButtonClicked(false);
    }

    const disableHamburgerOnResize = () => {
        if (window.innerWidth >= 771) {
            setMenuButtonClicked(false);
        }
    }

    window.addEventListener('resize', disableHamburgerOnResize);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="navbar nav-content">
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

                    <button className={menuButtonClicked ? "hamburger is-active" : "hamburger"} onClick={toggleMenuButton}>
                        <RiAlignJustify />
                    </button>

                </div>
                <div className={menuButtonClicked ? "mobile-nav is-active" : "mobile-nav"}>
                    <Link to="/" className="nav-link px-4 " onClick={disableHamburberMenu}>Search</Link>
                    <Link to="/notifications/create" className="nav-link px-4 " onClick={disableHamburberMenu}>Create new notification</Link>
                    <Link to="/notifications" className="nav-link px-4 " onClick={disableHamburberMenu}>Notifications</Link>
                    {savedUser ?
                        (
                            <Link to="/my-account" className="nav-link px-4 " onClick={disableHamburberMenu}>My Account</Link>
                        )
                        :
                        (
                            <>
                                <Link to="/register" className="nav-link px-4 " onClick={disableHamburberMenu}>Register</Link>
                                <Link to="/login" className="nav-link px-4 " onClick={disableHamburberMenu}>Login</Link>
                            </>
                        )
                    }
                    <button className={menuButtonClicked ? "hamburger is-active" : "hamburger"} onClick={toggleMenuButton}>
                        <BsArrowRightSquare />
                    </button>
                </div>
            </div>
        </nav>
    )


}

export default NavigationBar;