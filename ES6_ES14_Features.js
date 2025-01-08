// ES6 Features
// 1. Let and Const
let x = 5;
const y = 10;
console.log("Let and Const:", x, y);

// 2. Arrow Functions
const greet = (name) => `Hello, ${name}`;
console.log("Arrow Function:", greet("Ayush"));

// 3. Template Literals
const name = "Ayush";
console.log(`Template Literal: Welcome, ${name}!`);

// 4. Destructuring
const person = { name: "Ayush", age: 20 };
const { name: personName, age } = person;
console.log("Destructuring:", personName, age);

// 5. Promises
const fetchData = () => new Promise((resolve) => resolve("Data received"));
fetchData().then((data) => console.log("Promise:", data));

// ES7 Features
// 6. Exponentiation Operator
console.log("Exponentiation Operator:", 3 ** 2); // 9

// 7. Array.prototype.includes
const nums = [1, 2, 3];
console.log("Includes:", nums.includes(2)); // true

// ES8 Features
// 8. Async/Await
const asyncFetchData = async () => {
    const data = await fetchData();
    console.log("Async/Await:", data);
};
asyncFetchData();

// 9. Object.entries() and Object.values()
const perso = { name: "Ayush", age: 20 };
console.log("Object.entries:", Object.entries(perso));
console.log("Object.values:", Object.values(perso));

// ES9 Features
// 10. Rest/Spread for Objects
const { city = "Mumbai", ...rest } = { name: "Ayush", age: 20, city: "Pune" };
console.log("Rest Operator:", rest);

// ES10-ES14 Features
// 11. Optional Chaining
const user = { address: { city: "Mumbai" } };
console.log("Optional Chaining:", user?.address?.city); // Mumbai

// 12. Nullish Coalescing
const nullValue = null;
console.log("Nullish Coalescing:", nullValue ?? "Default Value"); // Default Value

// 13. String.prototype.replaceAll
const text = "Hello World! World is great.";
console.log("ReplaceAll:", text.replaceAll("World", "Earth"));

// 14. Top-Level Await
const fetchGreeting = async () => "Top-level await works!";
console.log(await fetchGreeting());
