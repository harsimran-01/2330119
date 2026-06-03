import NotificationCard from "../components/NotificationCard";

function NotificationPage() {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You received a new message."
    },
    {
      id: 2,
      title: "Payment Success",
      message: "Your payment was successful."
    }
  ];

  return (
    <>
      <h1>Notifications</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </>
  );
}

export default NotificationPage;