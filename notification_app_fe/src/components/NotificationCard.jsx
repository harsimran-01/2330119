import { Log } from "../../../logging_middleware/logger";

function NotificationCard({ notification }) {
  const handleRead = () => {
    Log(
      "frontend",
      "info",
      "component",
      `Notification ${notification.id} marked as read`
    );

    
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <h3>{notification.title}</h3>

      <p>{notification.message}</p>

      <button onClick={handleRead}>
        Mark Read
      </button>
    </div>
  );
}

export default NotificationCard;