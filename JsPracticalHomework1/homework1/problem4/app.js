const users = [
  { username: "Yuri Gagarin", lang: "ru" },
  {
    username: "Nil Armstrong",
    lang: "eng",
  },
];
function showUsernames(users) {
  usernames = users.map((item) => item.username);
}
showUsernames(users);
