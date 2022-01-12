import Swiper from 'swiper/bundle';

const swiper = new Swiper(".slider-r", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    effect: "coverflow",
    // centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    // centerSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
        disabledClass: 'button-disabled',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
    },
});


