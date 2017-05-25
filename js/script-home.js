

$(document).ready(function($) {

    if (window_size780.matches) {
        $('.section3__people').slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: '<button type="button" class="slick-next section3__people__slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev section3__people__slick-prev"></button>',
            cssEase: 'linear'

        });
    } else {
        $('.section3__people').slick({
            slidesToShow: 3,
            dots: true,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: '<button type="button" class="slick-next section3__people__slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev section3__people__slick-prev"></button>',
            cssEase: 'linear'
        });
    };
    $(".slider__for").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        useCSS: false,
        useTransform: false,

        asNavFor: '.slider__nav'
    });
    $(".slider__nav").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
    });

    $(".big-banner").slick({
        infinite: true,
        nextArrow: '<button type="button" class="slick-next big-banner__slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev big-banner__slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,


    });

    $(".main1__item__content")
        .mouseover(function() {
            $(this).find('h2').css({
                "margin-bottom": '20px',
                "transition": "1s",

            });
        })
        .mouseout(function() {
            $(this).find('h2').css({
                "margin-bottom": '0',
                "transition": "0",

            });
        });
    var sizepeop_item = $(".people-item").height();
    $(".section3-people").css({
        "min-height": sizepeop_item + 15 + "px",
    });





    $(".section2").css({
        "height": $(".shell").outerHeight() - 40 + "px",
    });
    var sect2_top = $(".section2").position().top;
    if (window.pageYOffset <= sect2_top) {
        $('.number__item__number').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 12000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    };
    var bigban_top = $(".big-banner").position().top;
    $(".big-banner__caption").each(function(index, el) {
        if (window.pageYOffset >= bigban_top) {
            $(".big-banner__caption").removeClass('big-banner__bot');

            $(this).animate({
                top: "40%",
                opacity: 1,
            }, 2500);
        }
    });

});
