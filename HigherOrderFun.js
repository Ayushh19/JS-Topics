// Higher-order function that accepts a callback
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the higher-order function
greet("Ayush", sayGoodbye);

// Output:
// Hello, Ayush!
// Goodbye!




// Higher-order function that returns another function
function multiplier(x) {
  return function(y) {
      return x * y; // Returns the product of x and y
  };
}

// Use the higher-order function
const multiplyBy2 = multiplier(2); // Returns a function that multiplies by 2
console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy2(10)); // Output: 20
