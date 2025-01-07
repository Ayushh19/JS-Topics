// Using var
var x = 10;
x = 20; // Reassignment is allowed
console.log("var x:", x); // Output: 20

// Using let
let y = 15;
y = 25; // Reassignment is allowed
console.log("let y:", y); // Output: 25
// let y = 30; // This would throw an error (redeclaration not allowed)

// Using const
const z = 50;
// z = 60; // This would throw an error (reassignment not allowed)
console.log("const z:", z); // Output: 50

// Demonstrating block scope
if (true) {
    var a = 100; // Accessible outside the block
    let b = 200; // Block-scoped
    const c = 300; // Block-scoped
}
console.log("var a:", a); // Output: 100
// console.log("let b:", b); // Error: b is not defined
// console.log("const c:", c); // Error: c is not defined
