
$(document).ready(function () {
    'use strict'
    $('.navbar .navbar-menu ul li a, .mobile-ul .nav-item').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
        $(this).addClass('active').parents().siblings().children('a').removeClass('active');
    })

    $(window).scroll(function () {
        $('.block').each(function () {
            var sro = $(window).scrollTop();
            var off = $(this).offset().top -= 100;
            if (sro > off) {
                var blockId = '.' + $(this).attr('id');
                $('.navbar .navbar-menu ul li a').removeClass('active');
                $('.navbar .navbar-menu ul li a[data-scroll="' + blockId + '"]').addClass('active');
            }
        })
        if ($(window).scrollTop() > 150) {
            $('.navbar').css({
                'padding': '15px 0',
                'z-index': '4'
            })
        }
        else {
            $('.navbar').css({
                'padding': '30px 0',
                'z-index': '1'
            })
        }
    })
    $('.mobile-menu-icon').click(function () {
        $('.overlay').show();
        $('.mobile-menu').animate({
            right: '0'
        }, 800)
        $('.overlay').animate({
            opacity: '1'
        }, 800)
    })
    $('.mobile-off, .overlay, .mobile-ul .nav-item').click(function () {
        $('.mobile-menu').animate({
            right: '-100%'
        }, 800)

        $('.overlay').animate({
            opacity: 0
        })
        $('.overlay').hide(800);
    })

    AOS.init({
        duration: 1500,
        once: true,
    });
})
