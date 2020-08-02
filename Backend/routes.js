var express = require('express')
var router = express.Router();
var dbm = require('./Controllers/dbm');
var passport = dbm.passport;
require('dotenv').config();

router.get('/user',function(req,res){
	console.log(JSON.stringify(req.user));
	res.json(req.user);
});

router.post('/login',passport.authenticate('local'),function(req,res){
	res.json(req.user);
});

router.get('/logout', function(req, res){
	req.logout();
	res.status(200).send("logout Out Successfully");
});

router.post('/changePassword',function(req,res){
	if (!req.isAuthenticated()) return res.status(404).send();

	// newPassword , confirmPassword
	if (req.body.newPassword !== req.body.confirmPassword)
		return res.status(422).send("Two Fields Doesn't match");

	let result = dbm.changePassword(req.user,req.body.newPassword);
	if (result) {
		req.logout();
		return res.status(200).send("Your password was changed please login again");
	}
	else 
		return res.status(500).send();
		
});


router.post('/yami',function(req,res){
	if (!req.user) return res.status(404).send();
	if (req.user.type!="yami") return res.status(404).send();
	
	//email : email
	//department : department
	email = req.body.email;
	department = req.body.department;
	dbm.addToDatabase(email,department,"admin");
	res.status(200).send("Done") ;
})


router.post('/admin',function(req,res){
	if (!req.user) return res.status(404).send();
	if (req.user.type != 'admin') return res.status(404).send();
	
	// filename : student_file
	// hod : hod 
	// projectIncharge : pic
	// internal guide : ig

	if (!req.files)
		return res.send("No File Selected ");
	
	file = req.files.student_file
	if (file.name.slice(-4,file.name.length) != ".csv")
		res.send("Please Select A CSV File");
	else
	{
		lines = file.data.toString('utf8').split('\n');
		department = req.user.department;
		for ( i = 0 ; i < lines.length ; i++ )
		{
			atributes = lines[i].split(',');
			email = atributes[0];
			projectName = atributes[1];
			dbm.addToDatabase(req.user,email,department,"student", projectName);
		}
		dbm.addToDatabase(req.user,req.body.hod,department,"hod") ;
		dbm.addToDatabase(req.user,req.body.pic,department,"pic") ;
		dbm.addToDatabase(req.user,req.body.ig,department,"ig");
		res.send("Added  To Database ");
	}
});


module.exports = router;