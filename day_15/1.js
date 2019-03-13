// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  // var Vehicle = function(driver) {
  //   this.driver = driver;
  //   this.speed = 0;
  //   this.drive = function(mph) {
  //     this.speed = mph;
  //     return this.driver + ' driving at ' + mph + ' miles per hour';
  //   };
  // };

  // var Car = function(driver) {
  //   this.driver = driver;
  //   this.speed = 0;
  //   this.drive = function(mph) {
  //     this.speed = mph;
  //     return this.driver + ' driving at ' + mph + ' miles per hour';
  //   };
  // };

  // var Truck = function(driver) {
  //   this.driver = driver;
  //   this.speed = 0;
  //   this.cargo = [];
  //   this.drive = function(mph) {
  //     this.speed = mph;
  //     return this.driver + ' driving at ' + mph + ' miles per hour';
  //   };

  //   this.loadCargo = function(cargo) {
  //     this.cargo.push(cargo);
  //     return this;
  //   };

  //   this.unloadCargo = function() {
  //     return this.cargo.pop();
  //   };
  // };


// re-written function

function Vehicle(driver, speed, cargo) {
  this.driver = driver,
  this.speed = speed,
  this.cargo = cargo,
  this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };
  this.unloadCargo = function() {
      return this.cargo.pop();
    };
}

const Car = new Vehicle('Adam','25')
const Truck = new Vehicle('James','20',[2,5,90])

console.log(Car.drive(34))
// Adam driving at 34 miles per hour

console.log(Truck.loadCargo(13))


// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.


