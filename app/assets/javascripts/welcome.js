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

		$('.intro4, .asterisk').hide();
		$('.intro4, .asterisk').delay(6500).fadeIn();
		
});



