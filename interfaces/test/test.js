exports.req = 
{
	type: "json",
	body:
	{
	   userid : number,
	   comment: optional(string)
	},
	
	query : {name: string},
	
	validate : function(req){
		req.assert(req.body.userid <= 10);
		req.validated();
	}
}

exports.resp = {
	contentType: "application/json",
	body:
	{
		friends: optional(
			[{friendId: number, friendName: string}]
		),
		info: optional(
			{txt: string}
		)
	},
	
	validate : function(resp){
		resp.assert(resp.body.friends.length <= 100);
		resp.validated();
	}
}