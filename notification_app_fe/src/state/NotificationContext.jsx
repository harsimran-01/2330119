import { createContext, useState } from "react";
import { Log } from "../../logging_middleware/logger";

export const NotificationContext =
  createContext();

export const NotificationProvider = ({
  children,
}) => {

  const [notifications, setNotifications] =
    useState([]);

  const updateNotifications = (data) => {

    setNotifications(data);

    Log(
      "frontend",
      "debug",
      "state",
      "Notification state updated"
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        updateNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};