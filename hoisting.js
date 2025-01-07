greet();

function greet(){
  console.log("Hello,how are you!")
}


// Hoisting with var
console.log(hoistedVar); // undefined (due to hoisting, but not initialized yet)
var hoistedVar = "I'm hoisted!"; // Initialization happens here
console.log(hoistedVar); // "I'm hoisted!"

// Hoisting with let and const
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization (TDZ)
// let hoistedLet = "I'm let hoisted!";

// Hoisting with function declarations
hoistedFunction(); // "I'm hoisted!"

function hoistedFunction() {
    console.log("I'm hoisted!");
}

// Hoisting with function expressions (only the declaration is hoisted, not the assignment)
try {
    hoistedFuncExpr(); // Error: hoistedFuncExpr is not a function
} catch (e) {
    console.log(e.message);
}

var hoistedFuncExpr = function() {
    console.log("This is a function expression");
};
