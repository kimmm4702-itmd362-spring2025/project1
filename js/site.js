jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");
	$("form").on("submit", function(){
		//if submit button is clicked, add new message
		if(fname && lname && email && book){
			alter('Thank you, $(fname) $(lname)! You subscribed to read book "$(book)"');
		}else{
			alter("Please fill out all the fields.");

		}
	});
});
