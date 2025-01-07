// call
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = {
  name: "Alice"
};

greet.call(person, "Alice", 25);  // Output: "Hello, my name is Alice and I am 25 years old."

// apply
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person1 = {
  name: "Bob"
};

greet.apply(person1, ["Bob", 30])

//bind

function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person3 = {
  name: "Charlie"
};

// Using bind() to create a new function with `this` set to person
const greetCharlie = greet.bind(person3, "Charlie");
greetCharlie(35);  // Output: "Hello, my name is Charlie and I am 35 years old."
