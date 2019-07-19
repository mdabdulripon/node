const _ = require('lodash');

// * Returns the new array of chunks. [['mary', 'david', 'adam', 'brian', 'david'],['umar', 'lily', 'robert', 'ivan', 'peter' ],[ 'oscar', 'nancy']].
const arr = ['mary', 'david', 'adam', 'brian', 'david', 'umar', 'lily', 'robert', 'ivan', 'peter', 'oscar', 'nancy'];
console.log(arr.length);
console.log(_.chunk(arr, 5));

// * Creates an array with all falsey values removed.
const arr1 = [ 1, '', 'ripon', '', 4, false ];
console.log(arr1.length);
console.log(_.compact(arr1));
