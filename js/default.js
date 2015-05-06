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
      if (history.pushState) {
        history.pushState(null, null, this.hash);
      } 

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

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        menu.removeClass("show");
      } else {
        $(this).addClass("active");
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
  setAriaAttr;
  
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
  if($(thisAnswer).hasClass('is-collapsed')) {
    setAccordionAria(thisQuestion, thisAnswer, 'true');
  } else {
    setAccordionAria(thisQuestion, thisAnswer, 'false');
  }
    $(thisQuestion).toggleClass('is-collapsed');
    $(thisQuestion).toggleClass('is-expanded');
    $(thisAnswer).toggleClass('is-collapsed');
    $(thisAnswer).toggleClass('is-expanded');
  
    $(thisAnswer).toggleClass('animateIn');
  };

  for (i=0,len=accordionToggles.length; i<len; i++) {
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
  // **********************
  // END ACCORDION
  // **********************
  
});