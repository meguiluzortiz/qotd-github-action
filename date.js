const date = new Date();

// Function to convert
// single digit input
// to two digits
const formatData = (input) => {
  if (input > 9) {
    return input;
  } else return `0${input}`;
};

// Function to convert
// 24 Hour to 12 Hour clock
const formatHour = (input) => {
  if (input > 12) {
    return input - 12;
  }
  return input;
};

// Data about date
const format = {
  day: formatData(date.getDate()),
  month: formatData(date.getMonth() + 1),
  year: date.getFullYear(),
  hour24: formatData(date.getHours()),
  hour12: formatData(formatHour(date.getHours())),
  minutes: formatData(date.getMinutes()),
  seconds: formatData(date.getSeconds()),
};

module.exports.format24Hour = () => {
  const { day, month, year, hour24, minutes, seconds } = format;
  return `${day}/${month}/${year} ${hour24}:${minutes}:${seconds}`;
};
module.exports.format12Hour = ({ dd, mm, yyyy, hh, MM, SS }) => {
  const { day, month, year, hour12, minutes, seconds } = format;
  return `${day}/${month}/${year} ${hour12}:${minutes}:${seconds}`;
};
