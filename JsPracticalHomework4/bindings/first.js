const Pegination = {
  init: function (array, pageSize) {
    this.array = array;
    this.pageSize = pageSize;
    this.currentPage = 1;
  },
  getPageItem: function () {
    let start = (this.currentPage - 1) * this.pageSize;
    let last = (this.currentPage - 1) * this.pageSize + this.pageSize;
    return this.array.slice(start, last);
  },
  nextPage: function () {
    this.currentPage += 1;
    return this;
  },
  goToPage: function (page) {
    this.currentPage = page;
    return this;
  },
  firstPage: function () {
    this.currentPage = 1;
    return this;
  },
  lastPage: function () {
    let last = this.array.length / this.pageSize;
    this.goToPage(last);
    return this;
  },
  prevPage: function () {
    if (this.currentPage !== 1) {
      this.currentPage -= 1;
      return this;
    } else {
      console.log("this is the first page");
    }
  },
};
Pegination.init("abcdefghijklmnopqrstuvwxyz".split(""), 3);
Pegination.goToPage(3);
console.log(Pegination.getPageItem());
Pegination.prevPage().prevPage().prevPage();
console.log(Pegination.getPageItem());
