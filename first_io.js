var fs = require('fs');

buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

length = str.split('\n');

console.log(length.length-1);