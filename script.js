$(function () {
  //Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  //Trigger;
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".mobheader-gnb").toggleClass("active");
  });
  $(".mobheader-gnb a").click(function () {
    $(".mobheader-gnb, .trigger").removeClass("active");
  });
});
