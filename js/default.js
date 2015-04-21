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