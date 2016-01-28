$(document).ready(function () {


  /* --------homepage-btn ----------- */
    $(".fa-chevron-circle-down").click(function() {
      $('#section1').ScrollTo({
        duration: 1000,
        easing: 'easeInOutExpo'
      });
    });

    /* -------- THIS IS NEW!!! Nav Bar Scroll THIS IS NEW!!! ---------*/

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var $scrollTo = $($anchor.attr('href'));
        var $navHeight = 85;

        $('html, body').stop().animate({
            scrollTop: ($scrollTo.offset().top - $navHeight)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});
