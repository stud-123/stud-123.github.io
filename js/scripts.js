$(function () {

    /*****************Work Section**************/

    /*****************Team Section**************/
    $(".team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                autoplayHoverPause:false,
            },
            480:{items:2},
            768:{items:3},
        },
    });
    /*****************Team Section**************/
    $(".customers-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
    });
    /*****************Client Section**************/

    /*****************Stats Section**************/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });   
    
    $(window).scroll(function(){
       if($(this).scrollTop() > 100){
           $("nav").addClass("wg-top-nav");
           $(".btn-back-to-top").fadeIn();
       }else{
           $("nav").removeClass("wg-top-nav");           
           $(".btn-back-to-top").fadeOut();
       }
    });
    $("a.smooth-scroll").click(function(e){
        e.preventDefault();
        var section = $(this).attr("href");
        $("html,body").animate({
           scrollTop: $(section).offset().top - 69,
        }, 1250, "easeInOutExpo");
    });
});