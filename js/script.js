$(function () {

	//ABRE-FECHA-MENU
	$('.nav-toggle, .nav-close').click(function(e){
		e.preventDefault();
		$('.nav').toggleClass('active');
	});

	//HEADER-FIXAR
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){	
			$('.header').addClass('fixed');
			}else{
				$('.header').removeClass('fixed');
		}

	});


});