var http = require('http'); // get the http module
var module = require('./myfirstmodule_prettybasic');
	// create an http server that picks up requests and spits out stuff.
	http.createServer(function(req, res){ 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('This is my first module output.' + module.myDateTime());
		res.end();
	}
).listen(6633); // On port 8085 cuz of stuff on 8080;

