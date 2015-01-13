exports.req = 
{
	contentType: "json",
	body:
	{
	   id : num.min(0)
	},
	
	query : {ref: str},
	
	validate : function(req){
		process.nextTick(function(){
			console.log("Asynchronous request validation for:" +req.url);
			//req.assert(false);
			req.validated();
		});
	}
}

exports.res = {
	contentType: "application/json",
	body:
	{
		info: str,
	},
	
	validate : function(resp){
		resp.validated();
	}
}