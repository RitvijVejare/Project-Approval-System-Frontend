var mongoose = require('mongoose');
var User = require('../models/User');
var bcrypt = require('bcrypt');
var fs = require('fs');
require('dotenv').config();
var passport  = require('passport');
var localStrategy = require('passport-local').Strategy;

// internal guide => 

mongoose.connect(process.env.uri,{
	useNewUrlParser : true,
	useUnifiedTopology: true
	},function(err){
	if (err){
		console.log(err);
	}else{
		console.log("Connected to database");
		// CUSTOM CHANGE TO DATABASE HERE 
		/*
		User.find({type:'student'},function(err,data){
			for (i = 0 ; i < data.length ; i++){
				console.log(data[i].email);
			}
		});*/
	}
});

function makePassword(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
function saveLocallyForDevelopment(email,password){
	line = email+","+password +"\n";
	fs.appendFile('credentials.txt',line,function(err){
		if(err) throw err;
	})
}

function addToDatabase(admin,email,department,type,projectName=null){
	password = makePassword(8);
	saveLocallyForDevelopment(email,password);
	bcrypt.hash(password,10,function(err,hash){
		if (err) throw err;
		var user  = User();
		user.email = email;
		user.password = hash;
		user.department = department;
		user.type = type;
		user.admin_id = admin.id;
		if (projectName){
			user.projectName = projectName;
		}
		user.save(function(err,user){
			if (err) throw err;
			else console.log("Added ",user.email);

		});
		
	});	
}

passport.use(new localStrategy({usernameField:'email'},function(email,password,done){
	User.findOne({email:email},function(err,user){
		if (err) return done(err);
		if (user == null) return done(null,false,{message:"No User With That Email"});
		bcrypt.compare(password,user.password,function(err,result){
			if (result) return done(null,user,{message:"Successfully Logged In"});	
			else return done(null,false,{message:"Invalid password"});
		});
	});
}));
passport.serializeUser(function(user,done){
	done(null,user.id)
});
passport.deserializeUser(function(id,done){
	User.findById(id,function(err,user){
		if (err) return done(err);
		else return done(null,user);
	});
});


module.exports = {
	addToDatabase : addToDatabase,	
	passport : passport ,
}