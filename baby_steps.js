var sum = 0;
	if(process.argv.last == undefined){
		for (i = 2; i<= (process.argv.length - 1); i++ ){
			sum += (Number(process.argv[i]));
		}
	} else {
		for (i = 2; i<= (process.argv.length); i++ ){
			sum += (Number(process.argv[i]));
		}
	}
	

console.log(Number(sum))