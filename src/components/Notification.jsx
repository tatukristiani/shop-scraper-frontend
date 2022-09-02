import React from "react";

function Notification({ notification }) {

    return (
        <>
            <div>{notification.product}</div>
            <div>{notification.price}</div>
            <div>{notification.active ? "Active" : "Disabled"}</div>
        </>

    )
}


export default Notification;