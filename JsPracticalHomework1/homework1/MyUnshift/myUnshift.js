Array.prototype.unshiftAnArray = function unshiftAnArray(arr) {
  let resultingArray = [];
  if (Array.isArray(arr)) {
    resultingArray = arr;
  } else {
    resultingArray = [arr];
  }
  for (let i = resultingArray.length - 1; i >= 0; i--) {
    this.splice(0, 0, resultingArray[i]);
  }
  return this
};
let array = [1, 2, 3];
array.unshiftAnArray([4, 5, 6, 7]);
console.log(array);
