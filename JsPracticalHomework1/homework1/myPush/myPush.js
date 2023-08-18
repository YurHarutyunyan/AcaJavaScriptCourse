Array.prototype.myPush = function myPush() {
  for (arg of arguments) {
    this[this.length] = arg;
  }
  return this;
};
let arr = [1, 2, 3];
arr.myPush(2, 5, 6);
console.log(arr);
