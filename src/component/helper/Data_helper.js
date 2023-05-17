export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };
  
  export const convertUnixTimestampToDate = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000);
  };
  
  export const createDate = (year, month, weeks, day, date) => {
    let dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() + day + weeks * 7);
    dateObj.setMonth(dateObj.getMonth() + month);
    dateObj.setFullYear(dateObj.getFullYear() + year);
    return dateObj;
  };