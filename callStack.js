function firstFunction() {
  console.log("Inside firstFunction");
  secondFunction(); // Calling secondFunction
  console.log("Exiting firstFunction");
}

function secondFunction() {
  console.log("Inside secondFunction");
  thirdFunction(); // Calling thirdFunction
  console.log("Exiting secondFunction");
}

function thirdFunction() {
  console.log("Inside thirdFunction");
}

firstFunction();

// Output:
// Inside firstFunction
// Inside secondFunction
// Inside thirdFunction
// Exiting secondFunction
// Exiting firstFunction
