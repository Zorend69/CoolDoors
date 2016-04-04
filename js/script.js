function deviceNav(){
    $('.sendwich-icon').click(function(){
        if($(window).width()<768){
            if($(this).is('.active')){
                $(this).removeClass('active');
                $('.top-menu ul').animate({width:'toggle'},0);
            }
            else{
                $(this).addClass('active');
                $('.top-menu ul').animate({width:'toggle'},350);
            }
        }
    });
};


$(window).load(function(){
    deviceNav();
});

var flag = 0;
$(document).ready(function(){

     $('.withul a').click(function(){
        $(this).parent().toggleClass('active');
        
        if (flag !=1){
            $('.drop-down ul').slick({
                infinite: true,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1
            });
            flag = 1;
        }

        return false;
     });

     $('.tabs-titles a').click(function(){

        if ($(this).hasClass('active')){
            return false;
        }

        var displayblock = $(this).attr('href');
        $(this).parent().parent().find('.tabs-body').children().removeClass('active');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(displayblock).addClass('active');

        return false;
     });

    if ($(window).width() < 1024) {

        var leftsidebar = $('.left-sidebar');
        $('.right-block').prepend(leftsidebar);
        $('.left-footer').append($('.footer-address'));

        $('.sidebar-title').click(function(){
            $('.sidebar-list').slideToggle();
        });

        if ($(window).width() < 768) {
            
            var search = $('.search')
            $('.right-block').prepend(search);
            $('.sales-tabs-titles a.active').append('<sup></sup>');

            $('.sales-tabs-titles a').click(function(){
                if ($(this).hasClass('active') == true) {
                    $(this).prependTo($(this).parent());
                    $(this).parent().toggleClass('display');
                    $('.sales-tabs-titles a').find('sup').appendTo($(this));
                }
            });
        };

        $('.contacts-list .address').find('a').text('Адреса магазинов');
        $('.company-offers-title h2').text('Наши услуги');
    };


    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: false
    });    

});
