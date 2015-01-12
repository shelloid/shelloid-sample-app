/**
	@interface "test/test"
*/
exports.index = function(req, resp){
	shelloid.log(req.body);
	resp.send({info: "hello world: " + req.body.id});
}