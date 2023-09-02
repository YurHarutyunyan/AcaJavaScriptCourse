let result = 1;
function exponent(operand, power) {
  if (power === 0) {
    return result;
  }
  result *= operand;
  exponent(operand, power - 1);
  return result;
}
