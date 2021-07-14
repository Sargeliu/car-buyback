$(document).ready(function () {
	$('.carousel-inner').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		speed: 1500
  });

	wow = new WOW(
		{
			boxClass: 'wow',      // default
			animateClass: 'animate__animated', // default
			offset: 0,          // default
			mobile: true,       // default
			live: true        // default
		}
	)
	wow.init();
});


