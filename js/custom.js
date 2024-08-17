$(function () {

  "use strict"


  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 50) {
      $(".navbar_main").addClass("nav_ex")
    } else {
      $(".navbar_main").removeClass("nav_ex")
    }
  })
})