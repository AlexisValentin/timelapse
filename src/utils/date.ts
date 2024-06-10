export const getTimestampFromNow = (date: Date) => {
  const timestamp = new Date().getTime() - date.getTime();

  return timestamp > 0 ? timestamp : 0;
};

export const getDateFromTimestamp = (timestamp: number) => new Date(timestamp);
export const getTimestampFromDate = (date: Date) => date.getTime();

export const getElapsedTimestamp = (
  baseTime: number,
  targetTime: number
): number => targetTime - baseTime;

export const getSecondsFromDate = (date: Date) => date.getSeconds();
export const getMinutesFromDate = (date: Date) => date.getMinutes();
export const getHoursFromDate = (date: Date) => date.getHours();
export const getDaysFromDate = (date: Date) => date.getDay();
export const getMonthsFromDate = (date: Date) => date.getMonth();
export const getYears = (date: Date) => date.getFullYear();
