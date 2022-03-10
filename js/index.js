$(function () {
  "use strict";
  $(".navbar .navbar-menu ul li a, .mobile-ul .nav-item").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).data("scroll")).offset().top,
      },
      1000
    );
    $(this)
      .addClass("active")
      .parents()
      .siblings()
      .children("a")
      .removeClass("active");
  });

  $(window).on("scroll", function () {
    $(".block").each(function () {
      var sro = $(window).scrollTop();
      var off = ($(this).offset().top -= 100);
      if (sro > off) {
        var blockId = "." + $(this).attr("id");
        $(".navbar .navbar-menu ul li a").removeClass("active");
        $(
          '.navbar .navbar-menu ul li a[data-scroll="' + blockId + '"]'
        ).addClass("active");
      }
    });
    if ($(window).scrollTop() > 150) {
      $(".navbar").css({
        padding: "15px 0",
        "z-index": "4",
      });
    } else {
      $(".navbar").css({
        padding: "30px 0",
        "z-index": "1",
      });
    }
  });
  $(".mobile-menu-icon-ltr").click(function () {
    $(".overlay").show();
    $(".mobile-menu-ltr").animate(
      {
        right: "0",
      },
      800
    );
    $(".overlay").animate(
      {
        opacity: "1",
      },
      800
    );
  });
  $(".mobile-off, .overlay, .mobile-ul .nav-item").click(function () {
    $(".mobile-menu-ltr").animate(
      {
        right: "-100%",
      },
      800
    );

    $(".overlay").animate({
      opacity: 0,
    });
    $(".overlay").hide(800);
  });

  $(".mobile-menu-icon-rtl").click(function () {
    $(".overlay").show();
    $(".mobile-menu-rtl").animate(
      {
        left: "0",
      },
      800
    );
    $(".overlay").animate(
      {
        opacity: "1",
      },
      800
    );
  });
  $(".mobile-off, .overlay, .mobile-ul .nav-item").click(function () {
    $(".mobile-menu-rtl").animate(
      {
        left: "-100%",
      },
      800
    );

    $(".overlay").animate({
      opacity: 0,
    });
    $(".overlay").hide(800);
  });
  if ($(".owl-carousel").length > 0) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
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
    });
  }

  AOS.init({
    duration: 1500,
    once: true,
  });

  $("#qr-code-show-btn").on("click", function (e) {
    $("#qrCodeDropdown").fadeToggle();
  });
  $("#qrCodeDropdown .dropdown-menu-close-btn").on("click", function (e) {
    $("#qrCodeDropdown").fadeToggle();
  });

  $("#share-show-btn").on("click", function (e) {
    $("#share_profile_link").fadeToggle();
  });

  $("#share_profile_link .dropdown-menu-close-btn").on("click", function (e) {
    $("#share_profile_link").fadeToggle();
  });
  $("#qr-code-show-btn-2").on("click", function (e) {
    $("#qrCodeDropdown-2").fadeToggle();
  });
  $("#qrCodeDropdown-2 .dropdown-menu-close-btn").on("click", function (e) {
    $("#qrCodeDropdown-2").fadeToggle();
  });
  $("#share-show-btn-2").on("click", function (e) {
    $("#share_profile_link-2").fadeToggle();
  });
  $("#share_profile_link-2 .dropdown-menu-close-btn").on("click", function (e) {
    $("#share_profile_link-2").fadeToggle();
  });
});

$(document).ready(function () {
  $(".first-pic").click(function () {
    const menuItemID = $(this).data("id");
    toggleSlider(menuItemID);
    $(".menu-slider")
      .not(".slick-initialized")
      .slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
      })
      .on("setPosition");
  });
  function toggleSlider(itemID) {
    $(".menu-slider-wrapper[data-id=" + itemID + "]").toggleClass("hidden");
  }
  $(".close-menu-item-slider").click(function () {
    const menuItemID = $(this).data("id");
    $(".menu-slider-wrapper[data-id=" + menuItemID + "]").toggleClass("hidden");
    $(".menu-slider").slick("unslick");
  });
  const MENU_LINK = $(".menu-title-wrapper");
  const BTN_UP = $(".menu-up");
  $(MENU_LINK).click(function () {
    const menuLinkItemID = $(this).data("id");
    $('.menu-expanded-content[data-id="' + menuLinkItemID + '"]').toggleClass(
      "hidden"
    );
    $('.menu-up[data-id="' + menuLinkItemID + '"]').toggleClass("hidden");
  });
  $(BTN_UP).click(function () {
    const menuLinkItemID = $(this).data("id");
    $('.menu-expanded-content[data-id="' + menuLinkItemID + '"]').addClass(
      "hidden"
    );
    $('.menu-up[data-id="' + menuLinkItemID + '"]').addClass("hidden");
  });
});

