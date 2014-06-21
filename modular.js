var mymodule = require('./module.js')

mymodule(process.argv[2], process.argv[3], function(error,list){
	if(error){
		return console.log('error!')
	}
	list.forEach(function(filename){
		console.log(filename);
	})
});