function myPop(array) {
  let el = array[array.length - 1];
  array.length = array.length - 1;
  return el;
}
