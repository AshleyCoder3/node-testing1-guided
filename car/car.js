// Build a Car class!
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }
  drive(miles) {
    this.odometer = this.odometer + miles;
    //this.odometer += miles; // both work
    return miles;
  }
  async driveAsync(miles) {
    this.odometer = this.odometer + miles;
    //this.odometer += miles; // both work
    return miles;
  }
}

module.exports = Car;
