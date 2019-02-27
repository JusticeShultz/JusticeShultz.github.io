$('.basicslider').flexslider({
	slideshow: false, // Change to "true" to make the slides slide automatically
	animation: "slide",
	animationLoop: false,
	pauseOnHover: true,
	controlNav: false,
	directionNav: true,
	prevText: "<i class='fa fa-chevron-left'></i>",
	nextText: "<i class='fa fa-chevron-right'></i>",
	smoothHeight: true,
	start: function(slider) {
		$('body').removeClass('loading');
	}
});