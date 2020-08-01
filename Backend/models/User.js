const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email : String,
	password : String,
	type : String,
	admin_id : String,
	department : String,
	projectName : String,
});

var User = mongoose.model('User',userSchema);
module.exports  = User