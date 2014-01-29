$(function(){
	// Trigger maximage
	jQuery('#maximage').maximage({
		cycleOptions: {
			fx: "fade",
			timeout: 0,
			speed: 1000,
			prevNextEvent:'click',
			next: '#arrow_right',
			prev: '#arrow_left'
		},
		fillElement: ".container",
		backgroundSize: 'contain'
	});
		$('.intro1').hide();
		$('.intro1').delay(2000).fadeIn();

		$('.intro2').hide();
		$('.intro2').delay(3000).fadeIn();

		$('.intro3').hide();
		$('.intro3').delay(4000).fadeIn();

		$('.asterisk').hide();
		$('.asterisk').delay(6500).fadeIn();

		$('.intro4').hide();
		$('.intro4').delay(7100).fadeIn();

		$('.intro5').hide();
		$('.intro5').delay(7700).fadeIn();

		$('.intro6').hide();
		$('.intro6').delay(8300).fadeIn();		
});



