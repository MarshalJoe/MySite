$(function(){
	// Trigger maximage
	jQuery('#maximage').maximage({
		cycleOptions: {
			fx: "fade",
			timeout: 8000,
			speed: 1000,
			prevNextEvent:'click',
			next: '#arrow_right',
			prev: '#arrow_left'
		},
		fillElement: ".container",
		backgroundSize: 'contain'
	});
		$('.intro1').hide();
		$('.intro1').delay(2500).fadeIn();

		$('.intro2').hide();
		$('.intro2').delay(2700).fadeIn();

		$('.intro3').hide();
		$('.intro3').delay(3200).fadeIn();

		$('.intro4').hide();
		$('.intro4').delay(3600).fadeIn();

		$('.intro5, .asterisk').hide();
		$('.intro5, .asterisk').delay(5500).fadeIn();

		$('.intro6').hide();
		$('.intro6').delay(7000).fadeIn();
});



