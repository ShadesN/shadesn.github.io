var http = require('http');
var fileSystem = require('fs');
http.createServer(function(req, res){
	res.writeHead(200,{'Content-type' : 'text/html'});
	res.write(req.url);
	res.end();

	// fs.readFile('./'+req.url, function (err,data){
	// 	res.writeHead(200,{'Content-type' : 'text/html'});
	// 	res.write(data);
	// 	res.end();
	// });
}).listen(6633);