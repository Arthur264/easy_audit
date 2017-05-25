$(document).ready(function($) {
    var section7 = $(".section7").position().top;

    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $(".section7__item__part__line").each(function(index, el) {
        $(this).css({
            "background": randomColor(),
        });
    });
    if (window.pageYOffset <= section7) {
        $(".section7__item__part").width($(".section7__item__part__capt").width() + $(".section7__item__part__num").width());
        $(".section7__item__part").each(function(index) {
            var wid = $(".section7__item__part__num").eq(index).text();
            wid.replace("%", "");
            $(this).animate({ width: wid }, 6010);
        });

    };
    var sect9_height = $(".section9__item__text").height();
    if (window_size480min.matches) {
        $(".section9__item__main").css({
            "min-height": sect9_height + 80 + "px",
        });
    };
});
