var mymodule = require('./filtered_ls.js');

module.exports = fs.readdir(process.argv[2], function callback(err, list){

	ext = ('.'+process.argv[3]);
	for(i = 0; i <= list.length; i++){
		if (path.extname(list[i]) == ext){
		console.log(list[i])
		}
	}
});