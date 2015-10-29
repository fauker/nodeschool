var fs = require('fs');
var dir = process.argv[2];
var patch = require('path');

fs.readdir(dir, function callback (err, list) {
	list.forEach(function (file) {
		if (patch.extname(file) === "." + process.argv[3]) {
			console.log(file);
		};
	});
});
