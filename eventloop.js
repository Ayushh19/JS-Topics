console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

setTimeout(() => {
    console.log("Timer 2");
}, 100);

console.log("End");

// Output:
// Start
// End
// Timer 1
// Timer 2
