//slider
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
        nextEl: '.button-next',
    },

    // Pagination (enabled by default)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // Disable pagination by default
        enabled: false,
    },

    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
            pagination: {
                enabled: true,
            },
        },
        // when window width is <= 480px
        425: {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
                enabled: true,
            },
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            enabled: false,
        },
        }
    },
});

$(document).ready(function() {
    $("#dropdownNav").click(function() {
        $(".dropdownNavItems").toggleClass("active");
    });
});
