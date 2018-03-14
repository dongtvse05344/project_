
$(function(){
		
	$(window).scroll(function(event) {
		console.log($('html,body').scrollTop());
		if ($('html,body').scrollTop() > 200)
	 	{
	 		$('.menu-top').addClass('hien');
	 	}
 		else 
	 	{
	 		$('.menu-top').removeClass('hien');
	 	}
 	});

})