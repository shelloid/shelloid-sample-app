exports.req = 
{
	contentType: "json",
	body:
	{
	   id : num.min(0)
	},
	
	query : {ref: str},
	
	validate : function(req){
		req.validated();
	}
}

exports.resp = {
	contentType: "application/json",
	body:
	{
		info: str,
	},
	
	validate : function(resp){
		resp.validated();
	}
}