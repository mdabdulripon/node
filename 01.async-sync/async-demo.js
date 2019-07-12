const fs = require('fs');

function readFileData(err, res) {
	if(err) console.log(`err`, err);
	else console.log(`res`, res);
}
fs.readFile('./text.txt', readFileData);
console.log(`After Response `);
