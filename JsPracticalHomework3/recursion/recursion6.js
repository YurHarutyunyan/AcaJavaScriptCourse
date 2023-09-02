function flat(array) {
  let result = [];
  function recursion(array) {
    if (array.length === 0) return;
    if (Array.isArray(array[0])) {
      recursion(array[0]);
    } else {
      result.push(array[0]);
    }
    return recursion(array.slice(1, array.length));
  }
  recursion(array);
  return result;
}
