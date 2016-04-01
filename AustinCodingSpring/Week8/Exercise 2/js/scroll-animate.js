$(document).ready(function () {
            $(window).scroll(function () {
                var verticalscroll = $(this).scrollTop();

                if (verticalscroll > 200) {

                    $('#myCarousel').addClass('animated flip')
                }

                console.log(verticalscroll)


            });
    
        
    
            $(window).scroll(function () {
                    var verticalscroll = $(this).scrollTop();

                    if (verticalscroll > 200) {

                        $('#my_1').addClass('animated bounce');
                        $('#my_2').addClass('animated swing');
                        $('#my_3').addClass('animated zoomIn');
                        $('#my_4').addClass('animated slideInUp');
                        
                        
                    }

                      


                    });

            });