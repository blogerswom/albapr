$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })   
$('.magnet').slick({
  dots: false,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});     
$('.experts, .reviews').slick({
  dots: false,
  infinite: true,
  speed: 300,
  fade: false,
  cssEase: 'linear',
    adaptiveHeight: true
});     
   
});