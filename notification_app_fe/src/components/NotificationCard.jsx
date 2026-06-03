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
    <div className="notification-card">

      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>

      <br />
      <br />

      <span
        style={{
          color: isRead ? "green" : "orange",
          fontWeight: "bold"
        }}
      >
        {isRead ? "Read ✓" : "Unread"}
      </span>

      <br />
      <br />

      {!isRead && (
        <button onClick={handleRead}>
          Mark Read
        </button>
      )}

    </div>
  );
}

export default NotificationCard;