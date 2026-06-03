const priorityMap = {
  Placement: 1,
  Event: 2,
  Result: 3
};

export const prioritizeNotifications = (notifications) => {
  return [...notifications].sort((a, b) => {

    const unreadA = a.Read === false;
    const unreadB = b.Read === false;

    if (unreadA !== unreadB) {
      return unreadA ? -1 : 1;
    }

    const priorityA = priorityMap[a.Type] || 99;
    const priorityB = priorityMap[b.Type] || 99;

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
};