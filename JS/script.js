$(function () {
  //   "use strict";
  $(".movie_slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    centerPadding: "45px",
    focusOnSelect: true,
  });
});

/*SCROLL START*/
let navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(window.scrollY);

  if (scroll_value > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
/*SCROLL END*/

/*MOVE TO TOP START*/
let move_to_top = document.querySelector(".move_to_top");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(window.scrollY);

  if (scroll_value > 200) {
    move_to_top.classList.add("move_top");
  } else {
    move_to_top.classList.remove("move_top");
  }
});
/*MOVE TO TOP END*/
