$(document).ready(function() {

  $(".layers").mousemove(function(e) {
    var parentOffset = $(this).parent().offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    var amountOfLayers = $('.layer').length;

    $(this).css("transform", "rotateY(" + ((relX - 150)) / 16 + "deg) rotateX(" + ((relY - 90) / 12) + "deg) translateZ(-3rem)");
    $(this).find('.light-effect').css("transform", "translateY(" + (relY - 50) * 3.5 + "px) translateX(" + ((relX - 100) * - 1.2) + "px)");

    $(this).find(".layer").each(function(i) {
      $(this).css("transform", "translateX(-" + ((relX / 20) / (amountOfLayers - (i + 1))) + "px) translateY(" + ((relY / 20) / (amountOfLayers - (i + 1))) + "px)"); //
    });
  });

  $(".layers").mouseleave(function() {
    $(this).css("transform", "rotateY(0) rotateX(0) translateZ(-3rem)");
    $('.light-effect').css("transform", "translateY(-50rem)");
    $(".layer").css("transform", "translateX(0) translateY(0)");
  })

});
