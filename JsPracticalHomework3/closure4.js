let result = 0;
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}
function partial(callback, number) {
  result += callback(number);
  return result;
}
