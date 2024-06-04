export const getTimestampFromNow = (date: Date) => {
  const timestamp = new Date().getTime() - date.getTime();

  return timestamp > 0 ? timestamp : 0;
};

export const getDateFromTimestamp = (timestamp: number) => new Date(timestamp);
