let sum = 0;
function arraySum(array, index = 0) {
  if (index === array.length - 1) {
    sum += array[array.length - 1];
    return sum;
  }
  sum += array[index];
  arraySum(array, index + 1);
}
