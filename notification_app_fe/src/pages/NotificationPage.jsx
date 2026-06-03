import { useEffect } from "react";
import NotificationCard from "../components/NotificationCard";
import { Log } from "../../../logging_middleware/logger";
import "./NotificationPage.css";

function NotificationPage() {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You received a new message."
    },
    {
      id: 2,
      title: "Payment Success",
      message: "Your payment was successful."
    }
  ];

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Notification page loaded"
    );
  }, []);

  return (
    <div className="notification-container">
      <h1>Notifications</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </div>
  );
}

export default NotificationPage;