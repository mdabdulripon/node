const fs = require('fs');

var data = {
    name: 'ripon',
    age: 20,
    email:  'ripon@gmail.com'
}

// we want to pass a json data so convert the object to json by JSON.stringify
const jsonData = JSON.stringify(data)

fs.writeFile('data.json', jsonData, (err)=> {
    if (err) console.log(`err: ${err}`)
})
