Function.prototype.myBind = function (objectOnWhichTheMethodIsPerformed) {
  objectOnWhichTheMethodIsPerformed.thisValue = this;
  objectOnWhichTheMethodIsPerformed.thisValue();
  delete objectOnWhichTheMethodIsPerformed;
};
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
fullName();
