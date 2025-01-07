let globalVar = "I am global";

function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing outer function's variable
        console.log(innerVar);  // Accessing inner function's variable
    }

    innerFunction(); // Calling inner function
}

outerFunction();

// Output:
// I am global
// I am outer
// I am inner
