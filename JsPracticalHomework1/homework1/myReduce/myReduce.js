Array.prototype.myReduce = function myReduce(callback, initialValue) {
  if (initialValue === undefined) {
    let accumulator = this[0];
    for (let i = 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], this);
    }
    return accumulator;
  } else {
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], this);
    }
    return accumulator;
  }
};
