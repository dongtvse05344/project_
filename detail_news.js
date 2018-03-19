$(function(){
	var docao =$(window).height();
	$('.nd img').css({'height':docao});
	$('.nd h1').css({'height':docao+'px'})
	$(window).resize(function(){
		var docao =$(window).height();
		$('.nd img').css({'height':docao})
		$('.nd h1').css({'height':docao+'px'})
	})

	$('body').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //alert('up');
    } else {
       	//$('html,body').animate({	scrollTop: $('.description').offset().top}, 1000,"easeInOutExpo");
       	$('.nd').addClass('active');
       	//$('body').animate({	opacity: 0.3}, 1000);
    }
	});

	$('body').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        if ($('html,body').scrollTop() <200) {
        	$('.nd').removeClass('active');
        }
    } else {
       	//$('html,body').animate({	scrollTop: $('.description').offset().top}, 1000,"easeInOutExpo");
       	//$('body').animate({	opacity: 0.3}, 1000);
    }
	});
})