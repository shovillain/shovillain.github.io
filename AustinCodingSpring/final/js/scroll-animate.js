$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 200) {

            $('#about').addClass('animated zoomInDown');
             $('#services').addClass('animated zoomInLeft');
        }

    });


 $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 600) {

            $('#contact').addClass('animated zoomInRight');
        }
      console.log(verticalScroll);
    });
});