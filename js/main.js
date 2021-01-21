jQuery.noConflict()(function ($) {
	'use strict';
    
    $(window).on('load', function() { 
	    var grid_container = $('.portfolio_container'),
	    	grid_item = $('.grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.grid-item',
	       		layoutMode: 'masonry'
	        });
	    });

	    $('.portfolio-filter li').on('click', function (e) {
			$('.portfolio-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});

});