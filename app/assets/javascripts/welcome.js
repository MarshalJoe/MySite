// fades in an element
var writeText = function (ms, element) {
		$(element).hide();
		$(element).delay(ms).fadeIn();
};

// document ready function
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

	// write text in intro slide to page incrementally
		writeText(2500, ".intro1");
		writeText(2700, ".intro2");
		writeText(3200, ".intro3");
		writeText(3600, ".intro4");
		writeText(5500, ".asterisk");
		writeText(5500, ".intro5");
		writeText(7000, ".intro6");
});



