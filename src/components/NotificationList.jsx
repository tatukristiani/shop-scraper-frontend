import Notification from "./Notification";
import "../styles/notification.css";

function NotificationList({ notifications }) {

    return (
        <div className="container">
            <ul>
                {notifications.map((n => (
                    <Notification notification={n} />
                )))}
            </ul>
        </div>
    )
}


export default NotificationList;