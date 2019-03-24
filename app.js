const _path = require('path');



console.log(`*********************Path Module***********************`);
console.log(`_path :`, _path);
console.log(`*********************Path Module***********************`);




const _basename = _path.basename(__filename);
console.log('_basename : ', _basename);


const _extname = _path.extname(__filename);
console.log('_extname : ', _extname)



const _parse = _path.parse(__filename);
console.log('_parse : ', _parse)


