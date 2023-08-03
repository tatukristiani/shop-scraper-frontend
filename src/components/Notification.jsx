import React from "react";

function Notification({ notification }) {

    return (
        <>
            <p>{notification.product}</p>
            <p>{notification.price} €</p>
            <p>{notification.active ? "Active" : "Disabled"}</p>
        </>

    )
}


export default Notification;