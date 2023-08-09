function filterBy(objectList, by) {
  result = objectList.filter((obj) => obj[by]);
  console.log(result);
}
filterBy(
  [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true,
    },
    {
      username: "Elon Musk",
      isAstronaut: false,
    },
  ],
  "isAstronaut"
);
