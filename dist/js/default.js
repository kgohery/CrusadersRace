/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

$(function() {
	"use strict";

  var resizeLanding = function () {
		$(".landing").height($(window).height());
	}

	resizeLanding();

  $( window ).resize(function() {
	  resizeLanding();
	});


  $('a[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            window.location.hash = target.selector;
          });
        
        return false;
      }
    }
  });

  function changeHash(hash) {
    //window.location.hash = target.selector;
    console.log("Animation complete: " + hash);
  }

  $(window).scroll(function () {
    if( $(window).scrollTop() > $('#register').offset().top && !($('#register').hasClass('fixed'))){
      $('#register').addClass('fixed');
    } else if ($(window).scrollTop() == 0){
      $('#register').removeClass('fixed');
    }
	});

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
});