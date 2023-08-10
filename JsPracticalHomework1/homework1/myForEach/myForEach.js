Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    // ays ife im avelacumna inchvor buger covera anum
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};
