function OnlyNumbers(users) {
  result = users.filter((item) => item.lang != "ru");
  console.log(result);
}
OnlyNumbers([
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
]);
