let result = 1;
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  result = n * factorial(n - 1);
  return result;
}
