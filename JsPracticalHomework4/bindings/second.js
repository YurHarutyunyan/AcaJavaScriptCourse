const Airplane = {
  init: function (name) {
    this.name = name;
  },
  takeOff: function () {
    this.isFlying = true;
  },
  land: function land() {
    this.isFlying = false;
  },
};
Airplane.init("marcus");
Airplane.takeOff();
console.log(Airplane);
