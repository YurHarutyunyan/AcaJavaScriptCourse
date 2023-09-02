function binarySearch(array, target) {
  function recursion(start = 0, end = array.length) {
    let middle = Math.floor((end + start) / 2);
    if (target > array[middle]) {
      return recursion(middle, end);
    } else if (target === array[middle]) {
      return middle;
    } else {
      return recursion(start, middle);
    }
  }
  return recursion();
}
