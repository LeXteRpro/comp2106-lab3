// Linking to package
var connect = require('connect');

// link to the url module
var url = require('url');

// Creating a new app
var app = connect();

// Initiate request and response
var calculateTotals = function(req, res, next) {

	// Setting values for method
	var method = function (add, subtract, multiply, divide) {

		// Grab from URL string 
		var qs = url.parse(req.url, true).query;

		// methodType now equals to the parsed method?
		var methodType = qs.method;

		console.log('Equal')

	}

			console.log('error');
		};
			res.setHeader('Content-Type', 'text/plain');
		res.end ('Test');
	}

	    // display results
    res.write('add: ' + add + '\n');
    res.write('subtract: ' + subtract + '\n');
    res.write('multiple: ' + multiple + '\n');
    res.write('divide: ' + divide + '\n');


};

// Route url
app.use('/method', method);
app.use(calculateTotals);

// Port Listerner
app.listen(3000);
console.log('Connect app running at http://localhost:3000');

