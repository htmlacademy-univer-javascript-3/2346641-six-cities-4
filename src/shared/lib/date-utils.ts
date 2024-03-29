export const getHTMLDateTime = (date: Date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};

export const getMonthYear = (date: Date) => {
  console.log(date);
  return 'April 2019';
};
