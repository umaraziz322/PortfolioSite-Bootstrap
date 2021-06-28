console.log('Welcome to Script.js!');

$(document).ready(function(){

	let $btns = $('..productGallery .galleryMenu button');
	$btns.click(function(event){
		$('.productGallery .galleryMenu button').removeClass('active');
		event.target.classList.add('active');

		let selector = $(event.target).altr('data-filter');
		$('.productGallery .galleruGrid').isotope({
			filter:selector;
		});
		return false;
	});

	$('.productGallery .galleryMenu #allProducts').trigger('click');

	// Pop Image Carsoul Lightbox Gallery Effect
	$('.productGallery .galleruGrid .text-popup-link').magnificPopup({
		type:'image';
		// other options
		galler: (enabled:true);
	});

	// Owl Carousal
	$('.clients .owl-carousal').owlCarousal({
		loop:true;
		autoplay:true;
		dots:true;
		reponsive:{
			0:{
				items:1;
			},
			544:{
				items:2;
			}
		}
	});

	// Sticky Navigation Menu
	let nav_ofset_top = $('.header').height()+50;

	function navbarFixed(){
		if($('.header').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();
				if(scroll >= nav_ofset_top){
					$('.header .mainMenu').addClass('navbar_fixed');
				}else{
					$('.header .mainMenu').removeClass('navbar_fixed');
				}
			});
		}
	}
	
	navbarFixed();

});






