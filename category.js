﻿
$(function(){
		
	$(window).scroll(function(event) {
		console.log($('html,body').scrollTop());
		if ($('html,body').scrollTop() > 200)
	 	{
	 		$('.menu').addClass('hien');
	 	}
 		else 
	 	{
	 		$('.menu').removeClass('hien');
	 	}
 	});


})