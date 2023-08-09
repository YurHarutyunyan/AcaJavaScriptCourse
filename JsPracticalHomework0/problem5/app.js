function problem5(binNum) {
  let resultNumber = 0;
  let asStr = binNum.toString(2);
  for (let i = asStr.length - 1; i >= 0; i--) {
    if (asStr.charAt(i) == 1) {
      resultNumber += Math.pow(2, asStr.length - 1 - i);
    }
  }
  return resultNumber;
}
problem5(0b1010);
