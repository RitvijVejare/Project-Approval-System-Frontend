const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email : String,
	password : String,
	type : String,
	admin : {type : mongoose.Schema.Types.ObjectId,ref : 'User'},
	department : String,
	groupName : String,
});

var User = mongoose.model('User',userSchema);
module.exports  = User