$(document).ready(function(){
	/**
	 * При прокрутке страницы, показываем или срываем кнопку
	 */
	$(window).scroll(function () {
		// Если отступ сверху больше 50px то показываем кнопку "Наверх"
		if ($(this).scrollTop() > 50) {
			$('#button-up').fadeIn();
		} else {
			$('#button-up').fadeOut();
		}
	});
	
	/** При нажатии на кнопку мы перемещаемся к началу страницы */
	$('#button-up').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	
});

jQuery(document).ready(function ($) {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 32
				}, 1000);
				return false;
			}
		}
	});
});

// Fixed Nav
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 142;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');	
		}
	})
  
  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})