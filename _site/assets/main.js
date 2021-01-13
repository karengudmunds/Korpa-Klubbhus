

$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});
	// end hamburger menu


	// This is the pop-up gallery
	$('[data-fancybox="gallery"]').fancybox({
		protect: true,
		keyboard: true,
		arrows: true,
		infobar: false,
		buttons: [
    "close"
	  ],
	});



	// Gallery View Toggle

		$("#gallery-view").click(function(){
			$(this).addClass('active');
			$('#single-view').removeClass('active');
			$("#gallery-container").addClass('gallery-view').removeClass('single-view');
		});

		$("#single-view").click(function(){
			$(this).addClass('active');
			$('#gallery-view').removeClass('active');
			$("#gallery-container").addClass('single-view').removeClass('gallery-view');
		});

		$("#video-button").click(function(){
			$(this).toggleClass('active');
			$('#video-popup').fadeToggle();
		});



		$('nav#portfolio-filter a').click(function(e){
			e.preventDefault();

			/* make this <li> class active and remove class 'active' from any other <li>s */
			$('nav#portfolio-filter .active').removeClass('active');
			$(this).addClass('active');

			/* get the name of the cateory from this link */
			var filterVal = $(this).text().replace(' ','-').toLowerCase();

			$('.portfolio .portfolio-item').each(function() {
					if(filterVal == 'all'){
						$(this).removeClass('hidden');
					}else{
						if(!$(this).hasClass(filterVal)) {
							$(this).addClass('hidden'); // hide those that don't have the filter
						}else{
							$(this).removeClass('hidden'); // show those that do have the filter
						}
						};
					});

	});

console.log("page ready");

}); // End document ready



//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// Background image lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})



// End JQuery, add vanilla javascript
