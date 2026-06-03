import { Log } from "../../../logging_middleware/logger";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJzaW1yYW5rYXVyNjg2OTRAZ21haWwuY29tIiwiZXhwIjoxNzgwNDgwNjM5LCJpYXQiOjE3ODA0Nzk3MzksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MWMxY2NkMy1hOGZkLTRhYzQtYTcwOS1hMGE5YjVjNDMxOTIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJoYXJzaW1yYW4ga2F1ciIsInN1YiI6ImIxNWY1MmM4LWNmMmEtNDFhMS05ZGU5LTBkYjIyNzNmMTBjZSJ9LCJlbWFpbCI6ImhhcnNpbXJhbmthdXI2ODY5NEBnbWFpbC5jb20iLCJuYW1lIjoiaGFyc2ltcmFuIGthdXIiLCJyb2xsTm8iOiIyMzMwMTE5IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiYjE1ZjUyYzgtY2YyYS00MWExLTlkZTktMGRiMjI3M2YxMGNlIiwiY2xpZW50U2VjcmV0IjoidE16ekZCZE5zc3ZkWnZObiJ9.VjQ18bC61kmwrrYHQ-wnaTYvE78IzRwa7jnOWHvcpJQ";

export const fetchNotifications = async () => {
  try {
    Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    return data.notifications || [];
  } catch (error) {
    Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    console.error(error);
    return [];
  }
};