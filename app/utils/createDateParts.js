export const createDateParts = (rawValue) => {
  const parsedDate = new Date(rawValue);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return {
    date: parsedDate.toLocaleDateString("ru-RU"),
    time: parsedDate.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};
