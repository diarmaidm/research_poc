const fibonacci = require('./modules/fibonacci');

// Set to the argument or default to 5
let num = process.argv[2] || 5;

// Calculate the answer
let answer = fibonacci(num);

// log out message with value and result.
console.log(`fibonacci(${num}): ${answer}`);
