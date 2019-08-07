$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});

	$("#frontpage-example-slider").owlCarousel({
	    paginationSpeed : 1000,
	    singleItem:true,
	    autoPlay: 5000,
			// responsiveClass: true,
			// responsive:{
			// 	0:{
			// 			items:1,
			// 			nav:true
			// 	},
			// 	600:{
			// 			items:3,
			// 			nav:false
			// 		},
			// 	1000:{
			// 			items:5,
			// 			nav:true,
			// 			loop:false
			// 	}
			// }

	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});
