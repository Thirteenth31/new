$(function(){

    /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");



    $(window).on("scroll resize",function(){

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

      checkScroll(scrollPos,introH);

    });


    function checkScroll(scrollPos,introH){

          if(scrollPos > introH){
             header.addClass("fixed");
             navToggle.addClass("hide");
        }else{
             header.removeClass("fixed");
            navToggle.removeClass("hide");
              nav.removeClass("show");
        }

    };



    /* Smooth Scroll */

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

  nav.removeClass("show");

        $("html , body").animate({
            scrollTop:elementOffset -10
        },700);



    });

    /*  Nav Toggle  */

    navToggle.on("click",function(event){
        event.preventDefault();

        nav.toggleClass("show");
       
    });



});















