$(function () {
    $('.top_slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoPlay: 3000,
    });


    $('.header_btn').on('click', function (){
       $('.menu').addClass('active');
    });

    $('.menu_close-btn').on('click', function (){
        $('.menu').removeClass('active');
    });

    $('.header_btn').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    $('.menu_close-btn').on('click', function (){
        $('.header_btn').removeClass('active');
    });
})