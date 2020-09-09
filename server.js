const express = require("express");
const server = express();
const router = express.Router();
const port = 4000;
var path = require('path');



server.use(express.static(path.join(__dirname, 'public')));


 server.get("/", function(req, res){
 res.sendFile(__dirname +"/phone.html");
 });
 
router.route('/contact')
.post(function(req, res){
	//getFormInput(req);
	console.log("give");	
});




var array= [];
var first_name = "";
var last_name = "";
var company = "";
var photo;

function getFormInput(req){
	first_name= document.getElementById('firstName'). value;
	last_name = document.getElementById('lastName'). value;
	company = document. getElementById('company'). value;
	photo = document. getElementById('photo').value;

	var id = 0;
	var form = {
		userid:id++,
		firstName: first_name,
		lastName: last_name,
		company: company,
		photo:photo
	};
	array.push(form);
	console.log(array);

}




module.exports = router;












































server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});