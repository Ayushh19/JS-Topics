const str = "   Hello, World!   ";

// toUpperCase() - Converts to uppercase
console.log(str.toUpperCase());  // Output: "   HELLO, WORLD!   "

// toLowerCase() - Converts to lowercase
console.log(str.toLowerCase());  // Output: "   hello, world!   "

// charAt() - Returns the character at the specified index
console.log(str.charAt(7));      // Output: "W"

// includes() - Checks if a string contains a substring
console.log(str.includes("World"));  // Output: true

// slice() - Extracts a portion of the string
console.log(str.slice(3, 8));   // Output: "Hello"

// split() - Splits the string into an array of substrings
const words = str.split(" ");
console.log(words);  // Output: ["", "", "Hello,", "World!", "", ""]

// replace() - Replaces a substring with another
const newStr = str.replace("World", "JavaScript");
console.log(newStr);  // Output: "   Hello, JavaScript!   "

// trim() - Removes whitespace from both ends
console.log(str.trim());  // Output: "Hello, World!"
