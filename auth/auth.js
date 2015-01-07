var sysOk = true;

/**
 @auth "local"
 @path "/login"
*/

exports.auth = function(req, done, err){
	if(!sysOk){
		err.sys("System error!");
	}
	
	if(req.username == "admin" && req.password == "admin"){
		done({username: "admin"});
	}else{
		err.app("Invalid authentication attempt: " + req.username);
	}
}

/**
  @auth 	  ["google", "facebook", "twitter"]
  @pathPrefix "/login"
  @ignore
*/
exports.providerAuth  = function(req, done, err){
	if(req.profile.email == "xxx@gmail.com"){
		done({username: req.profile.email});
	}else{
		err("Invalid authentication attempt: " + req.profile.email);
	}
}
