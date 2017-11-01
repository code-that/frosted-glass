$(function () {

    var $frostedGlass = $('.frosted-glass');
    $frostedGlass.attr('data-html2canvas-ignore', true);
    var $blurheader = $('<div class="blurheader">').insertAfter('.frosted-glass');

    $blurheader.css({
      'position': 'fixed',
      'width': $frostedGlass.outerWidth(),
      'height': $frostedGlass.outerHeight(),
      'top': $frostedGlass.position().top,
      'left': $frostedGlass.position().left,
      'overflow': 'hidden',
      'zIndex': 10000,
    });
    $blurheader.attr('data-html2canvas-ignore', 'true');


    html2canvas($("body"), {
        onrendered: function (canvas) {

            $(".blurheader").append(canvas);
            $(canvas).attr('id', 'blurcanvas');

            $('#blurcanvas').css({
              'top': -$frostedGlass.position().top,
              'opacity': 1,
              'zIndex': 100,
              'position': 'absolute',
              'display': 'block'
            });

            stackBlurCanvasRGB(
              'blurcanvas',
              0,
              0,
              $("#blurcanvas").width(),
              $("#blurcanvas").height(),
            20);

        }
    });
});

$(window).scroll(function () {
    $("#blurcanvas").css(
        "transform",
        "translateY(-" + $(window).scrollTop() + "px)");
});

window.onresize = function () {
    $("#blurcanvas").width($(window).width());
};

$(document).bind('touchmove', function () {
    $("#blurcanvas").css(
        "transform",
        "translateY(-" + $(window).scrollTop() + "px)");
});

$(document).bind('touchend', function () {
    $("#blurcanvas").css(
        "transform",
        "translateY(-" + $(window).scrollTop() + "px)");
});
