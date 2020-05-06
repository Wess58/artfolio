// $(window).scroll(function() {
// //
// if ($(window).scrollTop() >= 100) {
//
//   $(".rellax").eq($(this).index()).addClass("blur");
// } else {
//   $(".rellax").eq($(this).index()).removeClass("blur");
// }
// });

$(document).ready(function() {
  $('.image-link').each(function() {
    $(this).css({
      "left": Math.random() * $(".container").outerHeight,
      "left": Math.random() * $(".container-fluid").outerHeight
      // "top": Math.random() * window.outerHeight

    })
  });

});
