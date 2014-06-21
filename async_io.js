var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback (err, buf) {
		var data = buf.toString();
		var length = data.split('\n');
		console.log(length.length-1);
	}
);

// fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
// 		console.log(data.toString().split('\n').length-1);
// 	}
// );