$(window).scroll(function() {

    if ($(this).scrollTop() > 300){
        $('#navbar').removeClass("navbar-hidden");
        // $('#navbar').addClass("fixed");
    }
    else{
        $('#navbar').addClass("navbar-hidden");
        // $('#navbar').removeClass("fixed");
    }

    if ($(this).scrollTop() > 0){
      $('#navbar').addClass("fixed");
    }
    else{
        $('#navbar').removeClass("fixed");
    }
});


$(window).ready(function(){
    var win = $(this);
    if (win.width() > 1999) {

      $('#light-slider').attr("id", "light-slider-xl");

    }
    else if (win.width() > 1599) {

      $('#light-slider').attr("id", "light-slider-hd");

    }
    else if (win.width() > 1199) {

      $('#light-slider').attr("id", "light-slider-sd");

    }
    else if (win.width() > 799) {

      $('#light-slider').attr("id", "light-slider-tl");

    }
    else if (win.width() > 499) {

      $('#light-slider').attr("id", "light-slider-tp");

    }
    else {
      $('#light-slider').attr("id", "light-slider-ph");
    }

});
