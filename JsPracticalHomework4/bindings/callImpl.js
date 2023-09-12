Function.prototype.myCall = function myCall(arg) {
  arg.thisValue = this; //as arg is the jeronimo object in the object a property is created and assigned the function on which the myCall is called
  arg.thisValue(); //and then the function is called in our case => greed
  delete arg.thisValue; //it is a nice practice
};
const obj = {
  greed: function () {
    console.log("hi ", this.name);
  },
  name: "marco",
};
const jeronimo = {
  name: "jero",
};
obj.greed.myCall(jeronimo); //vooala
