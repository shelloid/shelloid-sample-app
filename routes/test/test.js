/**
	@interface "test/test"
*/
exports.index = function(req, resp){
	console.log(req.body);
	resp.send({info: "hello world: " + req.body.id});
}