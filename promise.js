// Creating a promise that simulates an asynchronous task
const task = new Promise((resolve, reject) => {
  const success = true; // Change to false to simulate failure

  setTimeout(() => {
      if (success) {
          resolve("Task Completed Successfully!");
      } else {
          reject("Task Failed!");
      }
  }, 2000);
});

// Using .then() and .catch() to handle the resolved or rejected promise
task
  .then(result => {
      console.log(result);  // Output: "Task Completed Successfully!"
  })
  .catch(error => {
      console.log(error);   // Output (if failure): "Task Failed!"
  });
