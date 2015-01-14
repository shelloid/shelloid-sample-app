/**
	@interface "test/test"
*/
exports.index = function(req, res, ctx){
	if(ctx.env == "prod"){
		var db = sh.db.get("maindb");
		db
		.query("select * from users where username=?", [req.user.username])
		.success(function(r){
			res.send({info: r[0].info});
		})
		.error(function(er){
			throw er;
		})
		.execute();		
	}else{
		res.send({info: "hello world: " + req.body.id});
	}
}