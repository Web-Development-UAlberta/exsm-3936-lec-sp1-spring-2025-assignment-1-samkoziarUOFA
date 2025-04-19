// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
 
 
  //Engine class
  class Engine {
    constructor() {
      this.CylinderCount = 6;
      this.isRunning = false; // Engine starts off
    }
  }

  // Car class
  class Car {
    constructor(make, model, year) {
      this.make = make || "Lexus";
      this.model = model || "IS 300";
      this.year = year || 2002;
      this.odometer = 0;
      this.engine = new Engine(); // Attach an engine
    }

    // Start engine method
    startEngine() {
      this.engine.isRunning = true;
      output(`Engine has been started`);
    }

    // Stop engine method
    stopEngine() {
      this.engine.isRunning = false;
      output(`Engine has been turned off`);
    }

    // Drive method
    drive(kilometers) {
      if (this.engine.isRunning) {
        this.odometer += kilometers;
        output(`Odometer is currently: ${this.odometer}km`);
      } else {
        output("The engine is off.");
      }
    }
  }

// Start sequence as per instructions in assignment

  let myCar = new Car("Lexus", "IS300", 2002); // 1. Instantiate car

  myCar.startEngine();     // 2. Turn its engine on
  myCar.drive(100);        // 3. Drive for 100km
  myCar.stopEngine();      // 4. Turn the engine off
  myCar.startEngine();     // 5. Turn its engine on
  myCar.drive(50);         // 6. Drive for 50km
  myCar.stopEngine();      // 7. Turn the engine off

  output(`Final odometer reading: ${myCar.odometer}km`); // 8.	Output the odometer reading to the console.

}