import { Log } from "../../../logging_middleware/logger";

function NotificationCard({ notification }) {

  const handleRead = () => {

    Log(
      "frontend",
      "info",
      "component",
      `Notification ${notification.id} marked as read`
    );

    // your read logic
  };

  return (
    <div>
      <h3>{notification.title}</h3>

      <button onClick={handleRead}>
        Mark Read
      </button>
    </div>
  );
}

export default NotificationCard;