Array.prototype.myMap = function myMap(callback) {
  let arrayToReturn = [];
  for (let i = 0; i < this.length; i++) {
    arrayToReturn[i] = callback(this[i], i, this);
  }
  return arrayToReturn;
};
