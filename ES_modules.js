// Named Export
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default Export
const multiply = (a, b) => a * b;
export default multiply;



// Importing Named Exports
import { add, subtract } from './math.js'; 

// Importing Default Export
import multiply from './math.js';

console.log(add(5, 3));      // Output: 8
console.log(subtract(9, 4)); // Output: 5
console.log(multiply(3, 2)); // Output: 6
