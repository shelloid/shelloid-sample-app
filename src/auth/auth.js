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
	if(req.profile.emails && req.profile.emails.length > 0){
		console.log("Successfully authenticated: " + req.profile.emails[0].value);
		done({username: req.profile.emails[0].value});
	}else{
		err("Invalid authentication attempt: " + req.profile.emails[0].value);
	}
}
