function OnlyNumbers(arrayOfAnything) {
  result = arrayOfAnything.filter((item) => Number.isInteger(item));
  console.log(result);
}
OnlyNumbers([1, "3", "re", NaN, null, 34]);
