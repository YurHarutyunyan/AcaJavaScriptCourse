function Problem1(num1, num2, num3) {
  if (num1 && num2 && num3) {
    let firstTwo = num1 ^ num2;
    let result = firstTwo ^ num3;
    if (result < 0) return "-";
    else return "+";
  } else {
    return "unsign";
  }
}
