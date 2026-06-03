import { useState } from "react";
import { Log } from "../../../logging_middleware/logger";

function NotificationCard({ notification }) {
  const [isRead, setIsRead] = useState(false);

  const handleRead = () => {
    setIsRead(true);

    Log(
      "frontend",
      "info",
      "component",
      `Notification ${notification.id} marked as read`
    );
  };

  return (
    <div className="notification-card">
      <h3>{notification.title}</h3>

      <p>{notification.message}</p>

      <p>
        Status:
        <span
          style={{
            color: isRead ? "green" : "orange",
            fontWeight: "bold",
            marginLeft: "8px"
          }}
        >
          {isRead ? "Read ✓" : "Unread"}
        </span>
      </p>

      {!isRead ? (
        <button onClick={handleRead}>
          Mark Read
        </button>
      ) : (
        <p style={{ color: "green" }}>
          Notification marked as read
        </p>
      )}
    </div>
  );
}

export default NotificationCard;