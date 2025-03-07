jQuery(function($){
	$('html').removeClass('nojs');
	$("html").addClass("hasjs");
	//if submit button is clicked, add new message
	$('#input-submit').on('click',function(){
		$("submit").text("Thank you for subscribing!");
		});
});
