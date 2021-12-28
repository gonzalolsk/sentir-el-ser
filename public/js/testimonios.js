
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter:true,
        reverseDirection:true,
      },
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
    700: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
    },
    1050: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
    }
}


  });
