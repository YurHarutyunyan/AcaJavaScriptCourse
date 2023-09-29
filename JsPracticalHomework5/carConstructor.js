class CarConstructor {
  tank = 0;
  odometer = 0;
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
  }
  fill(gallons) {
    this.tank += gallons;
  }
  drive(distance) {
    if (distance / this.milesPerGallon > this.tank) {
      this.odometer += this.tank * this.milesPerGallon;
      return `I ran out of fuel at${this.odometer} miles`;
    } else {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    }
  }
}
let car = new CarConstructor("rio", 3);
car.fill(4);
console.log(car.drive(13));
console.log(car.odometer, car.tank);
