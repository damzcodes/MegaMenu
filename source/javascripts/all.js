//= require_tree .

// Top level nav
$("#menu .dropdown > .dropdown-trigger").on("mouseenter", function(){
	var $dropdown = $(this).closest('.dropdown');
	$dropdown.addClass("active");
	$dropdown.find(".nav-main-subnav").addClass("active");
});

$("#menu .dropdown").on("mouseleave", function(){
	var $dropdown = $(this).closest('.dropdown');
	$dropdown.removeClass("active");
	$dropdown.find(".nav-main-subnav").removeClass("active");
});

// //Second level nav
$("#menu .flyout > .flyout-trigger").on("mouseenter", function(){
	var $flyout = $(this).closest('.flyout');
	$flyout.addClass("active");
	$flyout.find(".nav-subnav-flyout").addClass("active");
	$flyout.closest('.nav-main-subnav').addClass('flownout');
});

$("#menu .flyout").on("mouseleave", function(){
	var $flyout = $(this).closest('.flyout');
	$flyout.removeClass("active");
	$flyout.find(".nav-subnav-flyout").removeClass("active");
	$flyout.closest('.nav-main-subnav').removeClass('flownout');
});

//Touchscreen
$("#menu .dropdown > .dropdown-trigger").on("click", function(){
	var $dropdown = $(this).closest('.dropdown');
	$dropdown.toggleClass("active");
	$dropdown.find(".nav-main-subnav").toggleClass("active");
});

$(document).on("click", function(e){
	if($(e.target).is('.dropdown-trigger'))
		return;
	if ($(e.target).closest('.nav-main-subnav').length)
		return;
	var $dropdown = $("#menu .dropdown");
	$dropdown.removeClass("active");
	$dropdown.find(".active").removeClass("active");
	$dropdown.find(".flownout").removeClass("flownout");
});

// //Second level nav
$("#menu .flyout > .flyout-trigger").on("click", function(){
	var $flyout = $(this).closest('.flyout');
	$flyout.closest(".nav-main-subnav").find(".active").removeClass("active");
	$flyout.addClass("active");
	$flyout.find(".nav-subnav-flyout").addClass("active");
	$flyout.closest('.nav-main-subnav').addClass('flownout');
});
