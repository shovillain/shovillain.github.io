$(document).ready(function() {
    $(window).scroll(function(){
        var verticalScroll= $(this).scrollTop();
        
        if (verticalScroll >= 100) {
            
            $('.service-box').addClass('animated flipInX infinite ')
        }
        
    }
    )
    
    console.log("add");
    
    
    
});



    
    // Initialize WOW.js Scrolling Animations
//    new WOW().init();


