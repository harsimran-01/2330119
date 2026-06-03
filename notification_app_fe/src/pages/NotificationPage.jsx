import { useEffect } from "react";
import { Log } from "../../../logging_middleware/logger";

function NotificationPage() {

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Notification page loaded"
    );
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
    </div>
  );
}

export default NotificationPage;