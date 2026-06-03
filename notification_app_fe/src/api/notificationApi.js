import { Log } from "../../logging_middleware/logger";

export const fetchNotifications = async () => {

  Log(
    "frontend",
    "info",
    "api",
    "Fetching notifications"
  );

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.json();
};