$(function(){
	pos = 0;
	$('.nd').each(function(index, el) {
		$(this).attr({
			"data-wow-delay": 0.3*pos+"s",
		});
		pos++;
		if(pos%4==0) pos = 0;
	});
})