
$(function() {
  $('.load').css('display', 'none');
  $('.load').fadeIn(1000);

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
  

  $('.loading').fadeIn('fast').delay(1000).fadeOut('slow');


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






  