$(function(){
 
    $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
    });
    $('.product-slider__inner').slick({
      dots:true,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 8,    
    });

    $(".js-range-slider").ionRangeSlider({
      type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
  });
  
  $('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list')
  });

  $('.icon-th-large').on('click', function(){
    $('.product__item').removeClass('list')
  });
  var mixer = mixitup('.products__inner-box');
});