'use strict';

const fs = require('fs');

const rs = fs.createReadStream('./log-file/21072712.log');
const ws = fs.createWriteStream('./log-file/res.log');


rs.pipe(ws);

rs.on('end', () => {
    console.log('Done');
});
