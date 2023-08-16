Array.prototype.mySlice = function mySlice(start, end) {
  if (this === undefined) return undefined;
  if (this.length === 0) return this;
  if (start < 0) start = start + this.length;
  if (start > this.length) return this;
  if (end < 0) end = end + this.length;
  if (end > this.length) end = this.length;
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};
