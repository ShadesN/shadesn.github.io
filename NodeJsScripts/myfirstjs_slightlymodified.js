var http = require('http'); // get the http module
	// create an http server that picks up requests and spits out stuff.
	http.createServer(function(req, res){ 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('This shit should work but I don\'t really know why');
	}
).listen(6633); // On port 8085 cuz of stuff on 8080;

