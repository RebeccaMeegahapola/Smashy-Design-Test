const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    },

    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        // 768: {
        //   slidesPerView: 2,
        //   spaceBetween: 20
        // }
      }
  
  });