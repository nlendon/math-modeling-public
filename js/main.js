(function ($) {
	"use strict";
	$(window).on('scroll', function () {

		var y = $(window).scrollTop(),
			topBar = $('header');

		if (y > 1) {
			topBar.addClass('sticky');
		}
		else {
			topBar.removeClass('sticky');
		}

	});
	/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------*/
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	toggleButton.on('click', function (event) {
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	toggleButton.on('click', function (event) {
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	if (toggleButton.is(':visible')) nav.addClass('mobile');

	$(window).resize(function () {
		if (toggleButton.is(':visible')) nav.addClass('mobile');
		else nav.removeClass('mobile');
	});

	$('#main-nav-wrap li a').on("click", function () {

		if (nav.hasClass('mobile')) {
			toggleButton.toggleClass('is-clicked');
			nav.fadeOut();
		}
	});
})(jQuery);
