function myFlat(arr, depth = 1) {
  let newArray = [];
  function flat(array, currentDepth) {
    for (el of array) {
      if (Array.isArray(el) && currentDepth < depth) {
        flat(el, currentDepth + 1);
      } else {
        newArray.push(el);
      }
    }
  }
  flat(arr, 0);
  return newArray;
}
let a = [1, 2, [3, 4, [5, 6]]];
