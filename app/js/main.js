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

  var mixer = mixitup('.products__inner-box');
});