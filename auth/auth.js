var sysOk = true;

/**
 @auth "local"
 @path "/login"
*/

exports.auth = function(msg, done, err){
	if(!sysOk){
		err.sys("System error!");
	}
	
	if(msg.username == "admin" && msg.password == "admin"){
		done({username: "admin"});
	}else{
		err.app("Invalid authentication attempt: " + msg.username);
	}
}

/**
  @auth 	  ["google", "facebook", "twitter"]
  @pathPrefix "/login"
  @ignore
*/
exports.providerAuth  = function(msg, done, err){
	if(msg.profile.email == "xxx@gmail.com"){
		done({username: msg.profile.email});
	}else{
		err("Invalid authentication attempt: " + msg.profile.email);
	}
}
