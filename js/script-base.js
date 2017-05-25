var window_size1200 = window.matchMedia('(max-width: 1200px)');
var window_size991 = window.matchMedia('(max-width: 991px)');
var window_size780 = window.matchMedia('(max-width: 780px)');
var window_size480 = window.matchMedia('(max-width: 480px)');
var window_size480min = window.matchMedia('(min-width: 480px)');
var window_size320 = window.matchMedia('(max-width: 320px)');
function openside() {
    if (window_size320.matches) {
        $("#mySidenav").css({
            "width": '60%',
            "top": $(".header").height() + 20 + "px",
        });
    } else if (window_size480.matches) {
        $("#mySidenav").css({
            "width": '40%',
            "top": $(".header").height() + 20 + "px",
        });
    } else if (window_size780.matches) {
        $("#mySidenav").css({
            "width": '30%',
            "top": $(".header").height() + 20 + "px",
        });
    } else {
        $("#mySidenav").css({
            "width": '50%',
        });

    }
};

function closeNav() {
    $("#mySidenav").css({
        "width": '0',
    });
};


function ClickSideBar() {
    if ($("#mySidenav").width() == 0) {
        return openside();
    } else {
        return closeNav()
    }
};

$(document).ready(function($) {
	    $(".active-search").click(function(event) {
        $(this).hide();
        $("#header__menu").hide();
        $(".header__form__search").show();
        $(".header__search").addClass('header__search__active');


    });
    $("#main_btn_up").click(function(event) {
        $("html,body").animate({ scrollTop: 0 }, 1510);
    });
    $(".foot__item3-list__link").hover(function() {

        $(this).addClass('arrow__link')
    }, function() {
        $(this).removeClass('arrow__link')
    });
});
