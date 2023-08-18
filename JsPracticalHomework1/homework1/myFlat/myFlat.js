let resultingArray = [];
function myFlat(arr) {
  if (Array.isArray(arr[0])) {
    myFlat(arr[0]);
  } else {
    if (arr.length === 0) {
      return resultingArray;
    }
    resultingArray.push(arr[0]);
    arr.splice(0, 1);
    myFlat(arr);
  }
}
let arr = [1, 2, [3, 4, [5, 6]]];
myFlat(arr);
console.log(resultingArray);
