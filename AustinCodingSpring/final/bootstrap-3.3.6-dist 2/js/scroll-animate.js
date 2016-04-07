$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 200) {

            $('#services').addClass('animated zoomInDown');
        }

    });


 $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 600) {

            $('#about').addClass('animated zoomInLeft');
        }
      console.log(verticalScroll);
    });
});