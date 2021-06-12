$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
  