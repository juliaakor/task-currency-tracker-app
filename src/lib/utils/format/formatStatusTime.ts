export const formatStatusTime = (date: Date): string => {
  const isToday = date.toDateString() === new Date().toDateString();
  const getDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-US', options).format(date);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
  };

  if (isToday) return getDate(date, timeOptions);

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return `${getDate(date, dateOptions)} at ${getDate(date, timeOptions)}`;
};
