function myFilter(array, callback) {
  let filteredArray = [];
  for (let item of array) {
    if (callback(item, array)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}
function foo(item, array) {
  return item >= 4;
}
let arr = [1, 2, 3, 4, 5, 6];
let filtered = myFilter(arr, foo);
console.log(filtered);
