$(document).ready(function () {
            $(window).scroll(function () {
                var verticalscroll = $(this).scrollTop();

                if (verticalscroll > 400) {

                    $('.myCarousel').addClass('animated flip')
                }

                console.log(verticalscroll)


            });
    
        
    
            $(window).scroll(function () {
                    var verticalscroll = $(this).scrollTop();

                    if (verticalscroll > 2040) {

                        $('#my_1').addClass('animated fadeInDownBig');
                        $('#my_2').addClass('animated fadeInRightBig');
                        $('#my_3').addClass('animated fadeInUpBig');
                        $('#my_4').addClass('animated fadeInLeftBig');
                        
                        
                    }

                       console.log(verticalscroll) 


                    });

            });