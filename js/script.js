$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          className: "slider variable-width",
          arrows: false,
          centerMode: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });
});