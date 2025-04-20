# University of Alberta Browser Console Template Repository
## Full Stack Web Application Development Program
### This repository is intended for the development of console JavaScript applications.

Run `npm run lint` to attempt to detect errors in your repository.

Use `output()` and `await input()` from `./src/js/scripts.js` to allow the user to interact with the console.
To run the console, launch `./src/index.html`.

This repository is intended for the submission for EXSM 3936 - JavaScript II - Module 01 Assignment Object-Oriented Programming
Submitted by: Samantha Koziar

--- COPY OF ASSIGNNMENT INSTRUCTIONS ---

Directions & Specifications

You are to write classes that will (shallowly) simulate a car and its engine. Both classes should have their own constructors. The car’s odometer property should always initialize to 0 and the engine’s running property should always initialize to false. Other properties should be passed in through constructor parameters. The constructor of the car should instantiate an engine for the car. 

The properties of the car class should include its make, model, year, odometer and engine. The engine property will be an instance of the engine class. The methods of the car class should include a method to start the car engine (no parameters) which will set the engine to running, stop the car engine (no parameters) which will set the engine to not running, and drive the car (a single parameter representing the distance to drive) which will add the argument to the odometer if the engine is on and throw an exception otherwise. 

The properties of the engine class should include a number of cylinders, and whether it is running or not. 

Once your class is constructed, using the browser console, create a script that will (remember to catch potential exceptions):
1.	Instantiate a car.
2.	Turn its engine on.
3.	Drive for 100km.
4.	Turn the engine off.
5.	Turn its engine on.
6.	Drive for 50km.
7.	Turn the engine off.
8.	Output the odometer reading to the console.
No user input is required.

Finally, output a JSON string representing your Car object to the console.
