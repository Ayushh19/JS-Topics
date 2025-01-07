const numbers = [1, 2, 3, 4, 5];

// map() - Create a new array with doubled values
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6, 8, 10]

// filter() - Create a new array with values greater than 3
const greaterThanThree = numbers.filter(num => num > 3);
console.log("Greater than 3:", greaterThanThree); // Output: [4, 5]

// reduce() - Sum all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // Output: 15

// forEach() - Log each number
numbers.forEach(num => console.log(num)); // Output: 1 2 3 4 5

// find() - Find the first number greater than 3
const found = numbers.find(num => num > 3);
console.log("Found:", found); // Output: 4
