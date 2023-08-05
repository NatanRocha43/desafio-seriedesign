$(document).ready(function() {
  $('.carousel-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: $('.custom-prev-1'),
    nextArrow: $('.custom-next-1'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 769,
        settings: {  
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 521,
        settings: {  
          arrows: false,
          slidesToShow: 1
        }
      }  
    ]
  });
});
$(document).ready(function() {
  $('.carousel-2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: $('.custom-prev-2'),
    nextArrow: $('.custom-next-2'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {  
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {  
          arrows: false,
          slidesToShow: 1
        }
      }  
    ]
  });
});