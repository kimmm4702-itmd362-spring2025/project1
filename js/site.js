jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");
	$("form").on("submit", function(){
		//if submit button is clicked, add new message
		if(fname && lname && email && book){
			alert('Thank you, $(fname) $(lname)! You subscribed to read book "$(book)"');
		}else{
			alert("Please fill out all the fields.");

		}
	});
});
