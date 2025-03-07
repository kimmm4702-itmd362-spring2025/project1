jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");

	$("form").on("submit", function(event){
		event.preventDefault(); // prevents form to refresh when submitted

		let fname=$("#fname").val().trim()
		let lname=$("#lname").val().trim()
		let email=$("#email").val().trim()
		let book=$("#book").val().

		//if submit button is clicked, add new message
		if(fname && lname && email && book){
			alert('Thank you, $(fname) $(lname)! You subscribed to read book "$(book)"');
			this.reset();
		}else{
			alert("Please fill out all the fields.");

		}
	});
});
