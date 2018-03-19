$(window).scroll(function() {

    if ($(this).scrollTop() > 400){
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
