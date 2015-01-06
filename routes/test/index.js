var m = require("file");

/**
  @path     	/\/ab.c/
  @method       ["get", "post"]
  @disable 
*/
exports.index = function(req, resp){ 
	resp.end("<h1>index!</h1>");
}

/**
   @pathSuffix 	":id"
*/
exports.world = function(req, resp){
	resp.end("<h1>world!</h1>");
}


