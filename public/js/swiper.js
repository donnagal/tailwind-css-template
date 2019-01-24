// http://idangero.us/swiper/api/


var swiper = new Swiper('.swiper-container-hero', {
  effect: 'fade',
  centeredSlides: true,
  speed: 2000,
  autoplay: 2000,
  pagination: '.swiper-pagination-hero',
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});




if ($(window).width() < 760) {
  //Small
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });
}
else {
//Large
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    preventInteractionOnTransition: true,
  });
}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 1);
});