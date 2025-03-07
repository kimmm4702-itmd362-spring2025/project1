jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");

	$('#form').on('submit', function(event){
		event.preventDefault(); 

		const fname = $('#fname').val();
		const lname = $('#lname').val();
		const email = $('#email').val();
		const book = $('#book').val();

		alert(`Thank you, ${fname} ${lname}! You subscribed to read book "${book}"`);


	});
});
