function fetchData(callback) {
  setTimeout(() => {
      console.log("Data fetched!");
      callback(); // Call the callback after the task (e.g., data fetching) is done
  }, 2000); // Simulate an async task (2 seconds)
}

function processData() {
  console.log("Processing data...");
}
// synchronous_callback
fetchData(processData);
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // Call the callback function
}

function thankYou() {
  console.log("Thank you for visiting!");
}

greet("Alice", thankYou);