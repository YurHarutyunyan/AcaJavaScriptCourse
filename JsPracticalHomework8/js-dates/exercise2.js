function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dateArray = [date.getDate(), date.getMonth(), date.getFullYear()];
  let result = `${months[dateArray[1]]} ${dateArray[0]},${dateArray[2]}`;
  return result;
}
let fd = formatDate(new Date("10/16/2000"));
console.log(fd);
