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
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: false // Easaly remove markers for production 
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: "#header-zoom", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
		pin: true, // Pin the element true or false
  }
});

timelineHeader
  .to(".image-1", {
    scale: 1.5
  }, "sameTime")
  .to(".image-2", {
    scale: 3 
  }, "sameTime")



