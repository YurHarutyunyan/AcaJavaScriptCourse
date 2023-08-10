Array.prototype.myShift = function shift() {
  let removingElementAtindex0 = this[0];
  this.splice(0, 1);
  return removingElementAtindex0;
};

