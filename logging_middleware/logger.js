const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJzaW1yYW5rYXVyNjg2OTRAZ21haWwuY29tIiwiZXhwIjoxNzgwNDc3MDUzLCJpYXQiOjE3ODA0NzYxNTMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MTZiZTRhZi0wYzY2LTQzZjYtOGVjOC1jNDVkODljODM3NWQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJoYXJzaW1yYW4ga2F1ciIsInN1YiI6ImIxNWY1MmM4LWNmMmEtNDFhMS05ZGU5LTBkYjIyNzNmMTBjZSJ9LCJlbWFpbCI6ImhhcnNpbXJhbmthdXI2ODY5NEBnbWFpbC5jb20iLCJuYW1lIjoiaGFyc2ltcmFuIGthdXIiLCJyb2xsTm8iOiIyMzMwMTE5IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiYjE1ZjUyYzgtY2YyYS00MWExLTlkZTktMGRiMjI3M2YxMGNlIiwiY2xpZW50U2VjcmV0IjoidE16ekZCZE5zc3ZkWnZObiJ9.sACy_8Fel629prkEXM6NSlQ0UTURLeiCbS2iGmJseng";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      }
    );

    const data = await response.json();

    console.log("Log Success:", data);

    return data;
  } catch (error) {
    console.error("Log Error:", error);
  }
};