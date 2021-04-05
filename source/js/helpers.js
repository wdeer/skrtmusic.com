// add html.phone-only
if(window.innerWidth < 1024){
  $('html').addClass('phone-only');
}

if(window.innerWidth > 1024){
  $('html').addClass('tablet');
}

if (window.location.href.indexOf("localhost") > -1) {
	$('html').addClass('localhost');
}

function doOnOrientationChange() {
    switch(window.orientation) {
      case -90: case 90:
				 $('html').removeClass('portrait').addClass('landscape');
        break;
      default:
				 $('html').removeClass('landscape').addClass('portrait');
        break;
    }
}
window.addEventListener('orientationchange', doOnOrientationChange);
doOnOrientationChange();

$(".browserupgrade").on('touchstart click', function (event) {
  $(this).hide();
});
