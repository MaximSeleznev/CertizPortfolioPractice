$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(0);
		get_current.show(0);
	});

	$('#showall').click(function() {
		$('.post').show(0);
	});
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:8
  });
});

if($(window).width() < 420){
	$(".owl-carousel").owlCarousel({
  	items:3
  });
}