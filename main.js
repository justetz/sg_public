jQuery(document).ready(function($) {
	var SCROLL_CUTOFF = 75;

	if($(document).scrollTop() > SCROLL_CUTOFF) {
  		$('nav').addClass('shrink');
	}

	$(window).scroll(function() {
		if ($(document).scrollTop() > SCROLL_CUTOFF) {
			$('nav').addClass('shrink');
		} else {
			$('nav').removeClass('shrink');
		}
	});
});
