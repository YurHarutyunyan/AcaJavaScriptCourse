Array.prototype.mySplice = function mySplice(index, delCount) {
  if (index < 0) index = index + this.length;
  if (index > this.length) return this;
  if (delCount < 0) delCount = 0;
  if (delCount + index > this.length) delCount = this.length - index;
  let result = [];
  for (let i = 0; i < index; i++) {
    result[i] = this[i];
  }
  for (i = 2; i < mySplice.arguments.length; i++) {
    result.push(mySplice.arguments[i]);
  }
  for (let i = index + delCount; i < this.length; i++) {
    result.push(this[i]);
  }
  return result;
};
let arr = [1, 2, 3, 4];
let res = arr.mySplice(1, 2, 4, 5, 6, 7, 8);
console.log(res);
