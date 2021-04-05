
$(".menu-icon").on('click touchstart touchend', function(){
  let navToggle = $(this);
  let navParent = navToggle.parents('#nav');

  if (navParent.hasClass("menu-open")){
    navParent.removeClass("menu-open");
  } else {
    navParent.addClass("menu-open");
  }
});

$('nav a').on('click touchstart', function() {
	let link = $(this);
	let dest = link.attr('href');
  let linkParent = link.parents('#nav');

	$([document.documentElement, document.body]).animate({
		scrollTop: $(dest).offset().top
	}, 1500);

  setTimeout(function() {
    linkParent.removeClass("menu-open");
  }, 2000);
});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navEl = $('#nav');
var navbarHeight = navEl.outerHeight();

$('body').scroll(function(){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 150);

function hasScrolled() {
  var st = $('body').scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('body').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $('body').height() < $(document).height()) {
      $('body').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}
