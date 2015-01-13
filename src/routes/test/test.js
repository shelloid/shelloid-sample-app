/**
	@interface "test/test"
*/
exports.index = function(req, res){
	shelloid.log(req.body);
	if(sh.envName == "prod"){
		var db = sh.db.get("maindb");
		db
		.query("select * from users where username=?", [req.user.username])
		.success(function(r){
			res.send({info: r[0].info});
		})
		.execute();		
	}else{
		res.send({info: "hello world: " + req.body.id});
	}
}