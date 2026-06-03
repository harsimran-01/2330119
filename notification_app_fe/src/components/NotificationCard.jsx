import { useState } from "react";
import { Log } from "../../../logging_middleware/logger";

function NotificationCard({ notification }) {

  const [isRead, setIsRead] = useState(false);

const handleRead = async () => {
  setIsRead(true);

  const result = await Log(
    "frontend",
    "info",
    "page",
    "Notification marked as read"
  );

  console.log(result);
};

  return (
  <div
    className="notification-card"
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      backgroundColor: isRead ? "#f9fafb" : "#ffffff",
      transition: "0.2s ease"
    }}
  >
    <h3 style={{ margin: "0 0 8px 0" }}>{notification.Type}</h3>

    <p style={{ margin: "0 0 8px 0", color: "#374151" }}>
      {notification.Message}
    </p>

    <small style={{ color: "#6b7280" }}>
      {notification.Timestamp}
    </small>

    <div style={{ marginTop: "10px" }}>
      <span
        style={{
          color: isRead ? "#16a34a" : "#f59e0b",
          fontWeight: "600"
        }}
      >
        {isRead ? "Read ✓" : "Unread"}
      </span>
    </div>

    {!isRead && (
      <button
        onClick={handleRead}
        style={{
          marginTop: "12px",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        Mark Read
      </button>
    )}
  </div>
);
}

export default NotificationCard;