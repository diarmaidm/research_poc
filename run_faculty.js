const faculty = require('./modules/faculty');

// log all arguments to console for reference.
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// Set to the argument or default to 5
let num = process.argv[2] || 5;

// Calculate the answer
let answer = faculty(num);

// log out message with value and result.
console.log(`faculty(${num}): ${answer}`);
