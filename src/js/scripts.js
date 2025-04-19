// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  
  class Engine {
    constructor() {
      this.CylinderCount = 6;
      this.isRunning = false; // car start is off. On = true
    }
  }
  
  
  class Car { 
    constructor(make, model, year) {
      this.make = make || "Lexus";
      this.model = model || "IS 300";
      this.year = 2002;
      this.odometer = 0;
    }
  }


let myCar = new Car("Lexus", "IS300", 2002); // 1. Instantiate car

myCar.startEngine(); // 2. Turn its engine on
myCar.drive(100); // 3. Drive for 100km 
myCar.stopEngine(); // 4. Turn the engine off
myCar.startEngine(); // 5. Turn its engine on
myCar.drive(50); // 6. Drive for 50km
myCar.startEngine(); // 7. Turn the engine off

output("Output of odomoter reading here"); // Output the odometer reading to the console 


}
