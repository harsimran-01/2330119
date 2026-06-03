const API_URL =
    "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
    stack,
    level,
    packageName,
    message
) => {
    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message,
            }),
        });
    } catch (err) {
        console.error(err);
    }
};