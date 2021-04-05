import 'jquery';
// import "magnific-popup";
// import 'zenscroll';
// import 'letteringjs';
import 'lazysizes';
// import Swiper from 'swiper';

// custom scripts
// import './helpers.js' // my helpers
// import './swipers.js' // my swiper scripts
// import './navigation.js' // my navigation scripts
// import './contact.js' // my contact scripts





lazySizes.init();



$('.hoverable, .block span').each(function() {
	let el = $(this);

	el.on('touchstart touchend mouseenter mouseleave', function() {
		if(!el.hasClass('hovered')) {
				el.addClass('hovered');
		} else {
				el.removeClass('hovered');
		}
	});
});



//
//
// function cloneitem(item, counter){
// 	let el = item;
// 	let parent = el.parent();
//
// 	for (i = 0; i < counter; i++) {
// 	  $('#masthead h1').clone().appendTo('#masthead');
// 	}
// }
//
// cloneitem(word, 100);
//
//
// for (let i = 0; i < 100; i++) {
// 	$('#masthead h1').clone().appendTo('#masthead');
// 	console.log('worked');
// }
