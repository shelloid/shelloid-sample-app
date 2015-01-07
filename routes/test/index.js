var m = require("file");

/**
  @path     	/\/ab.c/
  @method       ["get", "post"]
*/
exports.index = function(req, resp){ 
	resp.end("<h1>index!</h1>");
}

/**
   @pathSuffix 	":id"
   @ignore
*/
exports.world = function(req, resp){
	resp.end("<h1>world!</h1>");
}


