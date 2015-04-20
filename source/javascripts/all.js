//= require_tree .
$(".dropdown > a").on("mouseenter", function(){
	var $dropdown = $(this).closest('.dropdown');
	$dropdown.addClass("active");
	$dropdown.find(".nav-main-subnav").addClass("active");
})

$(".dropdown").on("mouseleave", function(){
	var $dropdown = $(this).closest('.dropdown');
	$dropdown.removeClass("active");
	$dropdown.find(".nav-main-subnav").removeClass("active");
});

$(".flyout > a").on("mouseenter", function(){
	var $flyout = $(this).closest('.flyout');
	$flyout.addClass("active");
	$flyout.find(".nav-subnav-flyout").addClass("active");
	$flyout.closest('.nav-main-subnav').addClass('flownout');
})

$(".flyout").on("mouseleave", function(){
	var $flyout = $(this).closest('.flyout');
	$flyout.removeClass("active");
	$flyout.find(".nav-subnav-flyout").removeClass("active");
	$flyout.closest('.nav-main-subnav').removeClass('flownout');
});