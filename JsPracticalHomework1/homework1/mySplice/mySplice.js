Array.prototype.mySplice = function mySplice(index, delCount) {
  if (index < 0) index = index + this.length;
  if (index > this.length) return this;
  if (delCount < 0) delCount = 0;
  if (delCount + index > this.length) delCount = this.length - index;
  let result = [];
  for (let i = 0; i < index; i++) {
    result[i] = this[i];
  }
  for (let i = index + delCount; i < this.length; i++) {
    result.push(this[i]);
  }
};
