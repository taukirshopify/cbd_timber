

/*---------------------------------------------
Template name:  taukir-quickstart || html template
Version:        1.0
Author:  MD Taukir CH
Author url:     https://github.com/rajibmehedihasan

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]
----------------------------------------------*/

(function ($) {
  $(document).ready(function () {
    ma5menu({
        menu: '.site-menu',
        activeClass: 'active',
        footer: '#ma5menu-tools',
        position: 'left',
        closeOnBodyClick: true,
    });
});
$(document).ready(function() {
	$drawerRight = $('.cart-drawer-right');
	$cart_list = $('.cart-drawer-btn, .cart-drawer-close-btn');
		
	$cart_list.click(function(event) {
    event.preventDefault();
		$(this).toggleClass('active');
		$('body').toggleClass('cart-drawer-pushtoleft');
		$drawerRight.toggleClass('cart-drawer-open');
	});
});


$(document).ready(function() {
  
	$drawerRight1 = $('.cart-drawer-right1');
	$prodcut = $('.product-cart');
	$cart_list2 = $('.cart-drawer-btn1, .cart-drawer-close-btn1 ,.product-cart');
		
	$cart_list2.click(function(event) {
    event.preventDefault();
		$(this).toggleClass('active1');
		$('body').toggleClass('cart-drawer-pushtoleft1');
		$drawerRight1.toggleClass('cart-drawer-open1');
	});
});


// var names = ['Oily scan', 'Dry Scan', 'test3', 'test4'];

// setInterval(function() {
//   var rand = Math.floor(Math.random() * 4);
//   document.getElementById("name").innerHTML = names[rand];
// }, 2000);

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".sticky-header").removeClass("sticky");
	} else {
		$(".sticky-header").addClass("sticky");
	}
});
$('.oue-review-right').slick({
  arrows: false,
  dots: true,
  speed: 500,
  lazyLoad: 'ondemand',
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
var backButton = '<span class="slick-prev coom-slcik">&#8592;</span>';
var nextButton = '<span class="slick-next coom-slcik">&#8594;</span>';
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: backButton,
  nextArrow: nextButton,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.acarousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  })(jQuery);
  