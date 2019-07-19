
const fs = require('fs');                       // ! this required if you want to use built in module readFile.
const data = require('./data.json');            // ! this required if you want to access data directly.

// * you can directly access to the file *.
console.log(`data :`, data);
console.log(`name :`, data.name);


// * read  with file system *
fs.readFile('./data.json', 'utf-8', (err, res) => {
    if (err) {
        console.log(`err : ${err}`)
    } else {
        const data = JSON.parse(res);
        console.log(`res `, data);
        console.log(`res name :  ${data.name}`,);
    }
})





