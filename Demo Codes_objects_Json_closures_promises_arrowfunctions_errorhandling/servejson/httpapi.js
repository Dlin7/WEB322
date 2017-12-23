var http = require("http");
var data = require("./data/stock");

// create or http api webserver
http.createServer(function(req,res){
if (req.url === "/"){
    res.writeHead(200, {"Content-type":"text/json"});
    res.end(JSON.stringify(data));
} else if (req.url === "/instore"){
    inStockParts(res);
}else if(req.url === "/placeorder"){
    outOfStockParts(res);
}else {
    res.writeHead(404, {"Content-type":"text/plain"});
    res.end("Hey, requested data not found");
}

}).listen(2000);

console.log("server's listenig on port 2000");

//data is an array
//filter method filter data objects based on criteria
function inStockParts(res){
    //generate of outofstock parts need ordering
    // callback function is a predicate works for every part in file
    var inStore = data.filter(function(part){
        return part.availability === "in store";
    });
    //use response object to serve JSON data that meets specific criteria
    // data sent to a webserver has to be a string
    res.end(JSON.stringify(inStore));
}

function outOfStockParts(res){
    //generate of outofstock parts need ordering
    var toOrder = data.filter(function(part){
        return part.availability === "place order"
    });
    // data sent to a webserver has to be a string
    res.end(JSON.stringify(toOrder));
}