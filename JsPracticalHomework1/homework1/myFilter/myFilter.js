Array.prototype.myFilter = function myFilter(callback) {
  let resultingArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultingArray.push(this[i]);
    }
  }
  return resultingArray;
};
