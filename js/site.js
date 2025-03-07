jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");

	$("#signup-form").on("submit", function(event){
		event.preventDefault(); // prevent from from loading before submit

		const fname = $("#fname").val();
		const lname = $("#lname").val();
		const email = $("#email").val();
		const book = $("#book").val();

		// checks all fields are entered
		if(fname && lname && email && book){
			alert(`Thank you, ${fname} ${lname}! You subscribed to read book "${book}"`);
			form[0].reset(); //resets form
		}else{
			alert("Please fill in all the fields.");
		}


	});
});
