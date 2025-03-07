jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");

	$("#signup-form").on("submit", function(event){
		event.preventDefault(); 

		const fname = $("#fname").val();
		const lname = $("#lname").val();
		const email = $("#email").val();
		const book = $("#book").val();

		if(fname && lname && email && book){
			alert(`Thank you, ${fname} ${lname}! You subscribed to read book "${book}"`);
		}else{
			alert("Please fill in all the fields.");
		}


	});
});
