function myMap(array, callback) {
  let newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }
  return newArray;
}
