var m = app_require("file");

/**
  @path     	/\/ab.c/
  @pathSuffix 	":id"
  @method       ["get", "post"]
  @attrib 		{a: "b", c: "d"}
  @disable 
*/
exports.index = function(req, resp){ 
	resp.end("<h1>index!</h1>");
}

exports.world = function(req, resp){
	resp.end("<h1>world!</h1>");
}


