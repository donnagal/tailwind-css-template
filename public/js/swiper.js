// http://idangero.us/swiper/api/

var swiper = new Swiper('.swiper-container-hero', {
  centeredSlides: true,
  speed: 1000,
  autoplay: 4000,
  pagination: '.swiper-pagination-hero',
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
});
