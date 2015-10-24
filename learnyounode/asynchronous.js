var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function callback (err, contentFile) {
	var lines = contentFile.toString().split('\n').length - 1;
	console.log(lines);
});
