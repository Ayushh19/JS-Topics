// Blocking code (synchronous)
console.log("Start");

function blockingTask() {
    let i = 0;
    while (i < 1000000000) { // Loop to simulate a blocking task
        i++;
    }
    console.log("Blocking task completed");
}

blockingTask();

console.log("End"); // This will not be printed until the blockingTask is complete

// Non-Blocking code (asynchronous)
console.log("Start");

function nonBlockingTask(callback) {
    setTimeout(() => {
        console.log("Non-blocking task completed");
        callback();
    }, 2000); // Simulate a non-blocking task with a delay of 2 seconds
}

nonBlockingTask(() => {
    console.log("Callback after non-blocking task");
});

console.log("End"); // This will be printed immediately after starting non-blocking task
