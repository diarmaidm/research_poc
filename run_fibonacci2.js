const fibonacci2 = require('./modules/fibonacci2');

// Set to the argument or default to 5
let num = process.argv[2] || 5;

// Calculate the answer
let answer = fibonacci2(num);

// log out message with value and result.
console.log(`fibonacci2(${num}): ${answer}`);
