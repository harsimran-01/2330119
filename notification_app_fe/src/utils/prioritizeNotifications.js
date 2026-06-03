const priorityMap = {
  Message: 1,
  Event: 2,
  Result: 3
};

export const prioritizeNotifications =
  (notifications) => {

  return notifications.sort((a, b) => {

    const unreadA =
      a.Read === false;

    const unreadB =
      b.Read === false;

    if (unreadA !== unreadB) {
      return unreadA ? -1 : 1;
    }

    const priorityDifference =
      priorityMap[a.Type] -
      priorityMap[b.Type];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
};