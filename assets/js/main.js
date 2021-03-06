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

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    var $mobile_search = $('.nav-menu').clone().prop({
        id: 'mobile-search'
    })
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').append($mobile_search);
    $('body').prepend('<button type="button" id="myBtn2">LOG IN</button>');
    $('body').prepend('<button type="button" id="search-toggle"><i class="fa fa-search"></i></button>');
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
      $('#search-toggle, #myBtn2').toggle();
    });

    $(document).on('click', '#search-toggle', function(e) {
      $('body').toggleClass('mobile-search-active');
      $('#search-toggle i').toggleClass('fa-times fa-search');
      $('#mobile-body-overly').toggle();
      $('#mobile-nav-toggle, #myBtn2').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
          $('#search-toggle, #myBtn2').toggle();
        }
      }
    });

    $(document).click(function(e) {
      var container = $("#mobile-search, #search-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-search-active')) {
          $('body').removeClass('mobile-search-active');
          $('#search-toggle i').toggleClass('fa-times fa-search');
          $('#mobile-body-overly').fadeOut();
          $('#mobile-nav-toggle, #myBtn2').toggle();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle, #mobile-search, #search-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle, #mobile-search, #search-toggle").hide();
  }

    //Slider
    // $(document).ready(function(){
    //     var firstLoad = $('section.slider li:first-child img').attr('src');
    //     $('.show-course').attr('src',firstLoad).fadeIn();
    //     var $content = $('section.slider li:first-child .course .caption').clone().prop({
    //         id: 'caption-hero'
    //     });
    //     $('section.hero > div').append($content);
    // })
    $('.course-item').click(function(){
        var srcimg = $(this).attr('src');
        $(".show-course").attr('src',srcimg).fadeIn();
        var new_title = $(this).parent('.course').find('.caption .caption-title');
        var new_subtitle = $(this).parent('.course').find('.caption .caption-subtitle');
        $('#caption-hero .caption-title').text(new_title.text());
        $('#caption-hero .caption-subtitle').text(new_subtitle.text());
    });
 
    // Modal
    $(document).ready(function(){
        $('#myBtn, #myBtn2').click(function(){
            $('#myModal').show();
        });
        $('span.close').click(function(){
            $('#myModal').hide();
        })
        $(window).click(function(e){
            if ($('#myModal').is(e.target)) {
                $('#myModal').hide();
            }
        })
    })
 });
