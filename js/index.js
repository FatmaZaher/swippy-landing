
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
    $('.mobile-menu-icon-ltr').click(function () {
        $('.overlay').show();
        $('.mobile-menu-ltr').animate({
            right: '0'
        }, 800)
        $('.overlay').animate({
            opacity: '1'
        }, 800)
    })
    $('.mobile-off, .overlay, .mobile-ul .nav-item').click(function () {
        $('.mobile-menu-ltr').animate({
            right: '-100%'
        }, 800)

        $('.overlay').animate({
            opacity: 0
        })
        $('.overlay').hide(800);
    })

    $('.mobile-menu-icon-rtl').click(function () {
        $('.overlay').show();
        $('.mobile-menu-rtl').animate({
            left: '0'
        }, 800)
        $('.overlay').animate({
            opacity: '1'
        }, 800)
    })
    $('.mobile-off, .overlay, .mobile-ul .nav-item').click(function () {
        $('.mobile-menu-rtl').animate({
            left: '-100%'
        }, 800)

        $('.overlay').animate({
            opacity: 0
        })
        $('.overlay').hide(800);
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
        // rtl:true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    })
    AOS.init({
        duration: 1500,
        once: true,
    });
})
