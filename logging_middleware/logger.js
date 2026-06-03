const BASE_URL = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Logger Error:", error);
  }
};