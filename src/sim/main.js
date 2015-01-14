module.exports = exec;

function exec(done){
	var seq = shelloid.sim.seq();
	var con = shelloid.sim.concur();
	
	seq
	.step(function(req, res){
	  req.body = {userid: 1, friendid: 2};
	  req.url = "/user/friend/add";  
	  req.route();
	})
	.step(function(req, res){
	  req.body = {userid: 1};
	  req.url = "/user/friend/list";
	  req.route();
	})
	.success(function(req, res){
	   //assert(res.body.friends.indexOf(req.prev.body.friendid) >= 0);
	})
	.done(function(){
		console.log("Sequence done");
	});
	
	var conc = sh.sim.concur();
	conc
	.step(function(req, res){
		req.url = "/test/test2";
		req.route();
	})
	.success(function(req, res){
		console.log("Success on: " + req.url);
	})
	.step(function(req, res){
		req.url = "/test/test3";
		req.route();
	})
	.success(function(req, res){
		console.log("Success on: " + req.url);
	});
	
	var seq2 = sh.sim.seq();
	seq2
	.step(seq)
	.step(conc)
	.done(function(){
		console.log("sequence 2 done");
		done();
	})
	.execute();		
}