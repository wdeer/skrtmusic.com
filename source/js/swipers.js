// import Swiper from 'swiper';
//
//
//
// if($('#modeling').length > 0) {
// 	var modelingSwiperSettings = {
// 		// init: false,
// 		speed: 2500,
// 		slidesPerView: 2,
// 	  slidesPerColumn: 4,
// 		// loop: true,
// 		// slidesPerGroup: 5,
// 		// loopAdditionalSlides: 5,
//
// 	  spaceBetween: 0,
// 		slidesPerColumnFill: 'row',
//
// 		preloadImages: false,
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount: 2,
// 		},
//
// 		autoplay: {
// 			delay: 2500,
// 			disableOnInteraction: false,
// 		},
// 		breakpoints: {
// 			414: {
// 				slidesPerView: 3,
// 				slidesPerColumn: 3,
// 			},
// 			640: {
// 				slidesPerView: 3,
// 				slidesPerColumn: 3,
// 			},
// 		// 	768: {
//
// 		// 	},
// 		// 	1200: {
//
// 		// 	},
// 			1400: {
// 				slidesPerView: 6,
// 				slidesPerColumn: 3,
// 			}
// 		},
// 		pagination: {
// 			el: '#modeling .swiper-pagination',
// 			type: 'bullets',
// 			clickable: true,
// 			// type: 'progressbar',
// 		},
// 		navigation: {
// 			nextEl: '#modeling .swiper-button-next',
// 			prevEl: '#modeling .swiper-button-prev',
// 		},
//
//
// 		on: {
// 	    touchStart: function () {
// 	      // swiper.activeIndex.find('img').addClass('hovered');
// 				this.autoplay.stop();
// 	    },
// 			touchEnd: function () {
// 				this.autoplay.start();
// 	    },
// 			init: function () {
// 				$('#modeling').addClass('swipered');
// 	    },
// 			beforeDestroy: function () {
// 				$('#modeling').removeClass('swipered');
// 	    },
// 	  }
//
// 	} // modelingSwiperSettings
//
// 	setTimeout(function() {
// 		var portfolioSlider = new Swiper('#modeling .swiper-container', modelingSwiperSettings);
// 		portfolioSlider.init();
// 		portfolioSlider.autoplay.start();
//
// 		$('#modeling .swiper-container').mouseenter(function() {
// 		  portfolioSlider.autoplay.stop();
// 		});
//
// 		$('#modeling .swiper-container').mouseleave(function() {
// 		  portfolioSlider.autoplay.start();
// 		});
// 	}, 2000);
//
// } // if #modeling exists
//
//
//
// if($('.gallery-main').length > 0) {
// 	var galleryMainSettings = {
// 		speed: 3000,
// 		autoplay: {
// 			delay: 3000,
// 		},
// 		slidesPerView: 'auto',
// 	  spaceBetween: 0,
// 		centeredSlides: true,
// 	  loop: true,
// 	  loopedSlides: 5,
// 		initialSlide: 5,
// 	  navigation: {
// 	    nextEl: '.gallery-main .swiper-button-next',
// 	    prevEl: '.gallery-main .swiper-button-prev',
// 	  },
// 		pagination: {
// 			el: '.gallery-main .swiper-pagination',
// 			type: 'bullets',
// 			clickable: true,
// 			// type: 'progressbar',
// 		},
// 	  // thumbs: {
// 	  //   swiper: galleryThumbs,
// 	  // },
// 	};
//
// 	setTimeout(function() {
// 		var galleryMain = new Swiper('.gallery-main', galleryMainSettings);
// 		galleryMain.init();
// 		galleryMain.autoplay.start();
//
// 		$(".gallery-main").mouseenter(function() {
// 		  galleryMain.autoplay.stop();
// 		});
//
// 		$(".gallery-main").mouseleave(function() {
// 		  galleryMain.autoplay.start();
// 		});
// 	}, 2000);
// } // if .gallery-main exists
