var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Node.js says hello!');
    res.end();
}).listen(8081);
console.log("Server is running on http://13.127.97.252:8081");