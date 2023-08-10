Array.prototype.myPush = function myPush() {
  for (arg of arguments) {
    this[this.length] = arg;
  }
  return this;
};
