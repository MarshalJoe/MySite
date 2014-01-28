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
});

