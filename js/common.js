$(document).ready(function() {

	$(".toogle_accordion1").click(function() {
		$(".toogle_accordion1 ul").slideToggle();
	});
	$(".toogle_accordion2").click(function() {
		$(".toogle_accordion2 ul").slideToggle();
	});
	$(".toogle_accordion3").click(function() {
		$(".toogle_accordion3 ul").slideToggle();
	});
	$(".toogle_accordion4").click(function() {
		$(".toogle_accordion4 .v").slideToggle();
	});
	$(".toogle_accordion5").click(function() {
		$(".toogle_accordion5 .z").slideToggle();
	});


	$(".main-mnu_button").click(function() {
		$(".main-mnu ul").slideToggle();
	});
	
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel1");
	var owl2 = $(".carousel2");
	var owl3 = $(".carousel3");
	var owl4 = $(".carousel4");
	var owl5 = $(".carousel5");
	owl.owlCarousel({
		
		items : 1,
		autoHeight: true
	});
	owl2.owlCarousel({
		items : 1,
		autoHeight: true
	});
	owl3.owlCarousel({
		items : 1,
		autoHeight: true
	});
	owl4.owlCarousel({
		items : 1,
		autoHeight: true
	});
	owl5.owlCarousel({
		items : 1,
		autoHeight: true
	});


	owl.on(".owl-wrapper", function(){  prev_next(e,$(this))});
	owl2.on(".owl-wrapper",  function(){  prev_next(e,$(this))});
	owl3.on(".owl-wrapper",  function(){  prev_next(e,$(this))});
	owl4.on(".owl-wrapper",  function(){  prev_next(e,$(this))});
	owl5.on(".owl-wrapper",  function(){  prev_next(e,$(this))});

	function prev_next (e,owl) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	}


	$(".slider_container1 > .next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".slider_container1 > .prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	$(".slider_container2 > .next_button").click(function(){
		owl2.trigger("owl.next");
	});
	$(".slider_container2 > .prev_button").click(function(){
		owl2.trigger("owl.prev");
	});

	$(".slider_container3 > .next_button_big").click(function(){
		owl3.trigger("owl.next");
	});
	$(".slider_container3 > .prev_button_big").click(function(){
		owl3.trigger("owl.prev");
	});
	
	$(".slider_container4 > .next_button_biggest").click(function(){
		owl4.trigger("owl.next");
	});
	$(".slider_container4 > .prev_button_biggest").click(function(){
		owl4.trigger("owl.prev");
	});
	$(".slider_container5 > .next_button_biggest").click(function(){
		owl5.trigger("owl.next");
	});
	$(".slider_container5 > .prev_button_biggest").click(function(){
		owl5.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});