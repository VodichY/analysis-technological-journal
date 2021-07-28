const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./log-file/21072712.log'),
    crlfDelay: Infinity,
});

let line1 = '';
let re = /\d{2}:\d{2}.\d{6}-\d/gm;
rl.on('line', (line) => {
    if (line1.match(re) && line.match(re)) {
        console.log(line1);
        line1 = line;
    } else {
        line1 += line;
    }
});

