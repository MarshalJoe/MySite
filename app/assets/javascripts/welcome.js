$(function(){
	// Trigger maximage
	jQuery('#maximage').maximage({
		cycleOptions: {
			fx: "fade",
			timeout: 0,
			speed: 1000,
			prevNextEvent:'click',
			next: '#code_toggle'
		},
	});
});

