
$(function(){

    /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let burger = $("#burger");




    $(window).on("scroll resize",function(){

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

      checkScroll(scrollPos,introH);

    });


    function checkScroll(scrollPos,introH){

          if(scrollPos > introH){
             header.addClass("fixed");
             navToggle.addClass("visible");


        }else{
             header.removeClass("fixed");
             navToggle.removeClass("visible");
             nav.removeClass("show");
        }

    };




    /* Smooth Scroll */

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

  nav.removeClass("show");
  burger.removeClass("x");
        $("html , body").animate({
            scrollTop:elementOffset -10
        },700);



    });

    /*  Nav Toggle  */

    navToggle.on("click",function(event){
        event.preventDefault();

        nav.toggleClass("show");


    });

 burger.on("click",function(event){
        event.preventDefault();

         burger.toggleClass("x");

    });

});















