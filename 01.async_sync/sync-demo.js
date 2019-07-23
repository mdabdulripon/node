
const fs = require('fs');

const data = fs.readFileSync('./text.txt');
console.log(" data", data);
console.log(`this comes after data....`);
