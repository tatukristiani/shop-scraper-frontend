import React from "react";
import NotificationList from "../components/NotificationList";


function NotificationPage() {
    //const [notifications, setNotifications] = useState([]);

    /*
        useEffect(() => {
            // Fetch notifications
            async function fetchData() {
                const response = await axios.get("notifications");
                if (response) {
                    setNotifications(response.data);
                }
            }
            fetchData();
    
        }, [notifications])
    */
    return (
        <div className="container">
            <NotificationList />
        </div>
    )
}

export default NotificationPage;