function init()
{

}
$(function(){
	$('.khoisp').addClass('wow');
	$('.khoisp').addClass('bounceInUp');
	var pos = 0;
	$('.khoisp').each(function(index, el) {
		$(this).attr("data-wow-delay",0.3*pos+"s");
		pos++;
		if(pos == 3) pos = 0;
	});0

	$(window).scroll(function(event) {
		if ($('html,body').scrollTop() > 200)
	 	{
	 		$('.menu-left').css('top', '100px');;
	 	}
 		else 
	 	{
	 		$('.menu-left').css('top', '200px');;
	 	}
 	});

})