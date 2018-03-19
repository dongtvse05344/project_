var pos =1;
function init(){
		setInterval(function(){ 

			pos++;
			pos = pos >  $('.qc p').length ? 1 : pos;
			var hide = $('.active');
			$('.qc p').removeClass('active');
			
			$('.qc p:nth-child('+pos+')').addClass('active');


		}, 5000);
		
}

$(function(){
	$('.more img').addClass('wow');
	$('.more img').addClass('bounceInLeft');
	var t = 0;
	$('.more img').each(function(index, el) {
		$(this).attr({
			"data-wow-delay": t*0.2 +"s"
		});
		t++;
	});


	$('.more img').click(function(event) {
		$(".more li").css("opacity","1");
		$(".more img").css("opacity","1");
		$(this).css("opacity","0.8");

		$('#main').attr({
			'src': $(this).attr('src')
		});
	});

	//selec size

	$('.size li').click(function(event) {
		/* Act on the event */
		$('.size li').removeClass('selected');
		$(this).addClass('selected');
	});

})