
$(function(){
		
	$(window).scroll(function(event) {
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