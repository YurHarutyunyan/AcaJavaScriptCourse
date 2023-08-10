Array.prototype.myPop = function myPop() {
  let lastElement = this[this.length - 1];
  this.splice(this.length - 1, 1);
  return lastElement;
};
let a = [1, 2, 3];

console.log(a.myPop(), a);
