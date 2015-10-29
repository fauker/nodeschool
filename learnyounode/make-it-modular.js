var myModule = require('./myModule');
var dir = process.argv[2];
var filterStr = process.argv[3];

myModule(dir, filterStr, function(err, list) {
	if (err) {
		console.log('error: ' + err);
	}

	list.forEach(function (file) {
		console.log(file);
	});
});
