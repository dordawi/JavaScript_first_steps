var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
};

var myCar = new Car(70, "Ninja");
var myCar2 = new Car(40, "Jon");
var myCar3 = new Car(50, "Ann");

myCar.drive(50, 3);
myCar3.logDriver();
