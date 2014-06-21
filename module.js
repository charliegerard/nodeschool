var fs = require('fs');
var path = require('path');

module.exports = function (filepath, ext, callback) {

	fs.readdir(filepath, function (err, list){

		// var ext = ('.'+process.argv[3]);
		if (err){
			return callback(err);
		}
		list = list.filter(function(filename){
			return path.extname(filename) == '.'+ext
		})
		callback(null,list)
	});
};