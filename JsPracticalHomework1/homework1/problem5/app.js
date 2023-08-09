const users = [
  { username: "Yuri Gagarin", lang: "ru" },
  {
    username: "Nil Armstrong",
    lang: "eng",
  },
];
function showUsernamesLength(users) {
  usernames = users.map((item) => item.username.length);
  console.log(usernames);
}
showUsernamesLength(users);
