var postArray = [];
var first_name= "";
var last_name = "";
var company = "";
var photo;

// document.getElementById("Done").addEventListener("click", function() {
//   getFormInput();
// });
function getFormInput(){
	 first_name = document.getElementById('firstName').value;
	 last_name = document.getElementById("lastName").value;
	 company = document.getElementById("company").value;
	 photo = document.getElementById("photo").value;
	var id = 0;
	var form ={
		userid:id++,
		firstName: first_name,
		lastName: last_name,
		company: company,
		photo:photo
	};
	$.ajax({
		//console.log();
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/posts",
        //data: JSON.stringify(form), 
        contentType: 'application/json',
        success: function(res) {
        	postArray.push();
        	viewOnPage(res);
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(xhr, status, err.toString());
        }.bind(this)
    });
	
}


function viewOnPage(arrayObject){
	for(var i= 0; i<9; i++){
		$("#display"). append("<button onclick='getPostDetails()' id='post'>"+ arrayObject[i].id + ' - ' + arrayObject[i].body+"</button>");

	}
}

function getPostDetails(id){
	
}




