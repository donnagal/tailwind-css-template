
$(function() {
  $('.load-in').css('display', 'none');
  $('.load-in').fadeIn(1000);

  $('.load-out').fadeIn('fast').delay(1000).fadeOut('slow');

  $.get("__nav.html", function (data) {
    $("#nav").append(data);
  });
  $.get("__footer.html", function (data) {
    $("#footer").append(data);
  });
  $.get("__footer-2.html", function (data) {
    $("#footer-2").append(data);
  });

  AOS.init(
    {
      disable: 'mobile',
    }
  );
  


  //nav
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("nav").addClass("active");
    } else {
        $("nav").removeClass("active");
    }
  });


  //Small only
  if ($(window).width() < 990) {

    $("#nav").click(function(){
      $(".toggle-hidden").slideToggle();
      $('.hamburger-menu').toggleClass('animate');
    });

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
        $(".toggle-hidden").slideUp();
        $('.hamburger-menu').removeClass('animate');
    });

 }

    // Background data image
    $( ".bg-img" ).each(function() {
      var attr = $(this).attr('data-image-src');
    
      if (typeof attr !== typeof undefined && attr !== false) {
          $(this).css('background', 'url('+attr+') center bottom  / cover no-repeat');
          
      }
    
    });


   //Add animate class
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".animate-add").addClass("active");
    } else {
        $(".animate-add").removeClass("active");
    }
  });



// refresh on resize
 $(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});


  //Video Poster image
  $('.play').click(function() {
    video = '<iframe src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

});


(function($) {
"use strict"; // Start of use strict
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });


  })(jQuery); // End of use strict




  // Smooth Scroll

  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
  
  function wheel(event) {
      var delta = 0;
      if (event.wheelDelta) delta = event.wheelDelta / 120;
      else if (event.detail) delta = -event.detail / 3;
  
      handle(delta);
      if (event.preventDefault) event.preventDefault();
      event.returnValue = false;
  }
  
  var goUp = true;
  var end = null;
  var interval = null;
  
  function handle(delta) {
    var animationInterval = 20; //lower is faster
    var scrollSpeed = 20; //lower is faster
  
    if (end == null) {
      end = $(window).scrollTop();
    }
    end -= 30 * delta;
    goUp = delta > 0;
  
    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = $(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 || 
            scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
            goUp && step > -1 || 
            !goUp && step < 1 ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        $(window).scrollTop(scrollTop + step );
      }, animationInterval);
    }
  }