// 1. Regular Function
function addNumbers(a, b) {
  return a + b;
}
console.log("Regular Function:", addNumbers(5, 3)); // Output: 8

// 2. Arrow Function
const multiplyNumbers = (a, b) => a * b;
console.log("Arrow Function:", multiplyNumbers(4, 3)); // Output: 12

// 3. Anonymous Function
const divideNumbers = function(a, b) {
  return a / b;
};
console.log("Anonymous Function:", divideNumbers(10, 2)); // Output: 5
