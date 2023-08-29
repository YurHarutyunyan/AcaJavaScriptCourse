function myEvery(array, callBack) {
  let returningArray = [];
  for (let item of array) {
    if (callBack(item)) {
      returningArray.push(item);
    }
  }
  return returningArray;
}
let arr = [1, 2, 3, 4, 5, 6];
let foo = function foo(item) {
  return item > 2;
};
