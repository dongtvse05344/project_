var pos =1;
$(function(){
	//carousel

	$('.turnleft').click(function(event) {
		pos--;
		pos = pos <= 0 ? $('.khoianh').length : pos;
		var hide = $('.active');
		$('.khoianh').removeClass('active');
		hide.addClass('hide').one('webkitAnimationEnd', function(event) {
 			hide.removeClass('hide');
 		});

		$('.khoianh:nth-child('+pos+')').addClass('active');
		});


	$('.turnright').click(function(event) {
		pos++;
		pos = pos >  $('.khoianh').length ? 1 : pos;
		var hide = $('.active');
		$('.khoianh').removeClass('active');
		hide.addClass('hider').one('webkitAnimationEnd', function(event) {
 			hide.removeClass('hider');
 		});
		$('.khoianh:nth-child('+pos+')').addClass('active');
		});
})