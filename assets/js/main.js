
$(document).ready(function(){
	"use strict";

	// var window_width 	 = $(window).width(),
	// window_height 		 = window.innerHeight,
	// header_height 		 = $(".default-header").height(),
	// header_height_static = $(".site-header.static").outerHeight(),
	// fitscreen 			 = window_height - header_height;


  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })


    $('.active-course-carusel').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots: true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });

        $('.active-tstimonial-carusel').owlCarousel({
        items:3,
        margin:30,
        autoplay:true,
        loop:true,
        dots: true,       
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });

 });
