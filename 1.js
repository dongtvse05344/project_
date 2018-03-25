var poskhoianh = 1;

function init(){
		setInterval(function(){ 

			poskhoianh++;
			poskhoianh = poskhoianh >  $('.khoianh').length ? 1 : poskhoianh;
			var hide = $('.active');
			$('.khoianh').removeClass('active');
			hide.addClass('hidee').one('webkitAnimationEnd', function(event) {
	 			hide.removeClass('hidee');
	 		});
			$('.khoianh:nth-child('+poskhoianh+')').addClass('active');


		}, 10000);		
}
$(function(){
	$('.khoind').addClass('wow');
	$('.khoind').click(function(event) {
		/* Act on the event */
		window.location.href = "detail.html";
	});
	$('.khoind').addClass('bounceIn');

	pos = 2;
	$('.khoind').each(function(index, el) {
		$(this).attr("data-wow-delay",0.2*pos+"s");
		pos++;
	});



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
		poskhoianh--;
		poskhoianh = poskhoianh == 0 ? $('.khoianh').length : poskhoianh;

		var hide = $('.active');
		$('.khoianh').removeClass('active');
		hide.addClass('hide').one('webkitAnimationEnd', function(event) {
 			hide.removeClass('hide');
 		});

		$('.khoianh:nth-child('+poskhoianh+')').addClass('active');
		});


	$('.turnright').click(function(event) {
		poskhoianh++;
		poskhoianh = poskhoianh >  $('.khoianh').length ? 1 : poskhoianh;
		var hide = $('.active');
		$('.khoianh').removeClass('active');
		hide.addClass('hider').one('webkitAnimationEnd', function(event) {
 			hide.removeClass('hider');
 		});
		$('.khoianh:nth-child('+poskhoianh+')').addClass('active');
		});

	$('.khoicarousel').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //alert('up');
    } else {
       	$('html,body').animate({	scrollTop: $('.description').offset().top}, 1000,"easeInOutExpo");
       	//$('body').animate({	opacity: 0.3}, 1000);
    }
	});

	$('.toptrend').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //alert('up');
    } else {
       	$('html,body').animate({	scrollTop: $('.ttshop').offset().top - 50}, 1000,"easeInOutExpo");
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
