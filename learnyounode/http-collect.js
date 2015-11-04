var bl = require('bl')
var http = require('http')
var arg = proccess.argv[2];

http.get(arg, function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			console.log('Error: ' + err)	

		console.log(data.length)
		console.log(data)
	}))
})
