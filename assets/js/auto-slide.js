// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 5000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 2500;
			
			//count number of items
			var numberOfItems = $('.course-item').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.show-course')
            .attr('src', $('.course-item').eq(currentItem).attr('src')).fadeIn(initialFadeIn);
            var $content = $('section.slider li:first-child .course .caption').clone().prop({
                id: 'caption-hero'
            });
            $('section.hero > div').append($content);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.show-course')
				.attr('src', $('.course-item').eq(currentItem).attr('src')).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
                }
                var new_title = $('.course-item').eq(currentItem).parent('.course').find('.caption .caption-title');
                var new_subtitle = $('.course-item').eq(currentItem).parent('.course').find('.caption .caption-subtitle');
                $('#caption-hero .caption-title').text(new_title.text()).fadeIn(fadeTime);
                $('#caption-hero .caption-subtitle').text(new_subtitle.text()).fadeIn(fadeTime);
				$('.show-course')
				.attr('src', $('.course-item').eq(currentItem).attr('src')).fadeIn(fadeTime);
			}, itemInterval);	
		}	
	};
	InfiniteRotator.init();
});