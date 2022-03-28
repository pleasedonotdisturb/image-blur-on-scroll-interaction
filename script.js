// I'm using jQuery here. Please don't come at me :)

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	$(".image").css({
		filter: "blur(" + scroll / 20 + "px)"
	});
});