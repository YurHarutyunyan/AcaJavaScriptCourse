function parserToNumber(arrayOfStringElements) {
  numberArray = arrayOfStringElements.map((item) => {
    let isNumber = Number.parseInt(item);
    if (isNumber) {
      return isNumber;
    } else {
      return null;
    }
  });
  console.log(numberArray);
}
parserToNumber(["1", "2", "3", "4", "t"]);
