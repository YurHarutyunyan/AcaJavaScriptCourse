class Calculator {
  add(a, b) {
    return a + b;
  }
  substract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
let calc = new Calculator();
console.log(calc.add(1, 2));
console.log(calc.substract(1, 2));
console.log(calc.multiply(1, 2));
console.log(calc.divide(1, 2));
