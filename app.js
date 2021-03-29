$(function () {

    /* Fixed header */

    let header = $("#header");
    let intro = $("#intro");
    let intro_H = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, intro_H);

    $(window).on("scroll resize", function (){
        scrollPos = $(this).scrollTop();
        intro_H = intro.innerHeight();
        checkScroll(scrollPos, intro_H);
    });



    function checkScroll (scrollPos, intro_H) {
        if (scrollPos >= intro_H) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let block_id = $(this).data('scroll');
        let block_offset = $(block_id).offset().top;

        $("html, body").animate({
            scrollTop: block_offset - 50
        });

    });

    /* NavToggle */

    let navid = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();

        navid.toggleClass("show");
    });

    /* Slider */

    let slider = $("#slider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

});
