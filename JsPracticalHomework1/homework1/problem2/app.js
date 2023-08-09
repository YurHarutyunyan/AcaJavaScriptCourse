function problem2(longPhrase) {
  const arr = longPhrase.split(" ");
  console.log(arr);
  const acronym = arr.reduce((accumulator, cuurentItem) => {
    return accumulator + cuurentItem[0].toUpperCase();
  }, "");
  return acronym;
}
