function determineAge(date) {
  let birthdayM = date.getTime();
  let nowM = new Date().getTime();
  let difference = nowM - birthdayM;
  let yearsPassed = difference / 1000 / 60 / 60 / 24 / 365;
  yearsPassed = Math.floor(yearsPassed);
  console.log(yearsPassed);
}
determineAge(new Date("10/16/2000"));
