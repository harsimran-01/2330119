import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../api/notificationApi";
import { Log } from "../../../logging_middleware/logger";
import { prioritizeNotifications } from "../utils/prioritizeNotifications";

function NotificationPage() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    const loadNotifications =
      async () => {

      const data =
        await fetchNotifications();

      const sorted =
        prioritizeNotifications(data);

      setNotifications(
        sorted.slice(0, 10)
      );

      Log(
        "frontend",
        "info",
        "page",
        "Notifications loaded"
      );
    };

    loadNotifications();

  }, []);

  return (
    <div className="notification-container">
      <h1>Notifications</h1>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default NotificationPage;