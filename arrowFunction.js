/*
We have a Timer class that counts seconds. We want to use a method to start the 
timer and print the elapsed seconds every second. We'll use an arrow function to
 ensure the correct this binding within the setInterval callback.

Why Use an Arrow Function?

    Lexical this Binding: The arrow function inherits this from the surrounding context, 
    which is the Timer instance. This means this.seconds++ correctly increments the seconds 
    property of the Timer instance.
    If we used a regular function, this would refer to the global object 
    (or undefined in strict mode), leading to incorrect behavior.
*/

class Timer {
    constructor() {
      this.seconds = 0; // Initialize the seconds property
    }
  
    start() {
      // Use setInterval to call a function every 1000 milliseconds (1 second)
      setInterval(() => {
        // Arrow function ensures 'this' refers to the Timer instance
        this.seconds++;
        console.log(this.seconds); // Print the current seconds count
      }, 1000);
    }
  }
  
  const timer = new Timer(); // Create a new Timer instance
  timer.start(); // Start the timer
  