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
