function averageAge(users) {
  result = users.reduce((acc, currentUser) => {
    result = acc + currentUser.age / users.length;
    return result;
  }, 0);
  console.log(result);
}
averageAge([
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
]);
