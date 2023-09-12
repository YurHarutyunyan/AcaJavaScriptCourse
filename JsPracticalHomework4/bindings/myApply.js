Function.prototype.myApply = function (objectToAddThisValueOn, arguments) {
  objectToAddThisValueOn.thisValue = this;
  objectToAddThisValueOn.thisValue(arguments);
  delete objectToAddThisValueOn.thisValue;
};
const dog = {
  name: "sharik",
  noise: function (name) {
    console.log(this.name, " ", arr[0], " is barking");
  },
};
const cat = {
  name: "justACat",
};
let arr = ["catovich"];
dog.noise.myApply(cat, arr);
