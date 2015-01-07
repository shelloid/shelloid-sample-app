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
  @auth 	  "google"
  @pathPrefix "/login"
*/
exports.providerAuth  = function(req, done, err){
	if(req.profile.emails && req.profile.emails.length > 0 && 
		req.profile.emails[0].value == "jayaraj.poroor@gmail.com"){
		done({username: req.profile.email});
	}else{
		err("Invalid authentication attempt: " + req.profile.email);
	}
}
