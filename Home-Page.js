//Navbar
$(document).ready(function () {
  $(".mobileNav").click(function () {
    $(this).toggleClass("active");
    $(".navMain").toggleClass("active");
    $(".subNav").removeClass("active");
  });

  $("#servicesNavButton").click(function () {
    $(".subNav").toggleClass("active");
  });

  $("#subNavClose").click(function () {
    $(".subNav").removeClass("active");
    $(".navItem").removeClass("active");
  });

  $(".navItem").click(function () {
    let target = $(this);
    let other = $(".navItem").not(target);
    target.addClass("active");
    other.removeClass("active");
  });
  
  $(".subNavItem").click(function () {
    let target = $(this);
    let other = $(".subNavItem").not(target);
    target.addClass("active");
    other.removeClass("active");
  });
});

//slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
  },

  // Pagination (enabled by default)
  pagination: {
    el: ".swiper-pagination",
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
    },
  },
});


//Home Banner
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  const imgBtn = document.querySelector('.imgBtn');
  const rect = parallax.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      imgBtn.style.display = 'block';
  } else {
      imgBtn.style.display = 'none';
  }
});

//Video
// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.to("#myVideo", {
  scrollTrigger: {
    trigger: ".video-container",
    start: "top top", // When the top of the video container hits the top of the viewport
    end: "bottom top", // When the bottom of the video container hits the top of the viewport
    scrub: true, // Smooth scrubbing
    pin: true, // Pin the video in place
    markers: false // Display markers for debugging
  },
  width: "100vw", // Expand to full viewport width
  height: "100vh", // Expand to full viewport height
  top: 0,
  left: 0,
  ease: "none"
});




