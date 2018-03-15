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
	$('.more img').click(function(event) {
		$(".more li").css("opacity","1");
		$(".more img").css("opacity","1");
		$(this).css("opacity","0.8");

		$('#main').attr({
			'src': $(this).attr('src')
		});
	});

})