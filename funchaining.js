function Calculator(value) {
  this.value = value;

  // Method to add a number
  this.add = function(num) {
      this.value += num;
      return this;  // Return the instance to enable chaining
  };

  // Method to subtract a number
  this.subtract = function(num) {
      this.value -= num;
      return this;  // Return the instance to enable chaining
  };

  // Method to get the final result
  this.getResult = function() {
      return this.value;
  };
}

// Example of function chaining
const result = new Calculator(10)
  .add(5)          // 10 + 5 = 15
  .subtract(3)     // 15 - 3 = 12
  .getResult();    // Final result: 12

console.log(result);  // Output: 12
