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

  var i, len;

  var resizeLanding = function () {
		$(".landing").height($(window).height());
	}

	resizeLanding();

  $( window ).resize(function() {
	  resizeLanding();
	});


  $('a.nav[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = $(this.hash);
      history.pushState(null, null, this.hash);

      // toggle the menu
      if ($(this).hasClass("menu")) {
        // hide the hamburger menu
        $(".cmn-toggle-switch").click();
      }

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

  // Scroll the window to the anchor
  $(window).scroll(function () {
    if( $(window).scrollTop() > $('#register').offset().top && !($('#register').hasClass('fixed'))){
      $('#register').addClass('fixed');
    } else if ($(window).scrollTop() === 0){
      $('#register').removeClass('fixed');
    }
	});


  // Toggle the hamburger menu
  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      var menu = $("#hamburger");
      if (this.classList.contains("active") === true) {
        this.classList.remove("active");
        menu.removeClass("show");
      } else {
        this.classList.add("active");
        menu.addClass("show");
      }
    });
  }

  for (i=toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }






  // **********************
  // ACCORDION
  // **********************
  var d = document,
  accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
  setAccordionAria,
  switchAccordion,
  skipClickDelay,
  setAriaAttr,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr = function(el, ariaType, newProperty){
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded){
    switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
//function
switchAccordion = function(e) {
  e.preventDefault();
  var thisAnswer = e.target.parentNode.nextElementSibling;
  var thisQuestion = e.target;
  if(thisAnswer.classList.contains('is-collapsed')) {
    setAccordionAria(thisQuestion, thisAnswer, 'true');
  } else {
    setAccordionAria(thisQuestion, thisAnswer, 'false');
  }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');
  
    thisAnswer.classList.toggle('animateIn');
  };

  for (i=0,len=accordionToggles.length; i<len; i++) {
    if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
  // **********************
  // END ACCORDION
  // **********************
  
});