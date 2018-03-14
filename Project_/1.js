var pos = 1;

function init(){
		setInterval(function(){ 

			pos++;
			pos = pos >  $('.khoianh').length ? 1 : pos;
			var hide = $('.active');
			$('.khoianh').removeClass('active');
			hide.addClass('hidee').one('webkitAnimationEnd', function(event) {
	 			hide.removeClass('hidee');
	 		});
			$('.khoianh:nth-child('+pos+')').addClass('active');


		}, 5000);
		
}
$(function(){
	var docao =$(window).height();
	$('.khoicarousel').css({'height':docao});
	$('.turn').css({'line-height':docao+'px'})
	$(window).resize(function(){
		var docao =$(window).height();
		$('.khoicarousel').css({'height':docao})
		$('.turn').css({'line-height':docao+'px'})
	})




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

	$('.khoicarousel').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //alert('up');
    } else {
    	//console.log($('.description').offset().top);
       	//$('html,body').animate({	scrollTop: $('.description').offset().top}, 1000);
       	//$('body').animate({	opacity: 0.3}, 1000);
    }
	});


	//Hover top menu
	$('body').on('mouseenter', '.men', function(event) {
 		event.preventDefault();
 		var a = $(this).next();
 		a.addClass('active');
 	});
 	$('body').on('mouseout', '.men', function(event) {
 		event.preventDefault();
 		var a = $(this).next();
 		a.removeClass('active');
 	});


})