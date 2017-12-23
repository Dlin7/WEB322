var http = require('http');
var content = require("./data/stock");
http.createServer(function(req,res){
res.writeHead(200, {"Content-type":"text/json"});
res.end(JSON.stringify(content));
}).listen(2500);

console.log("server up and running on port 2500");