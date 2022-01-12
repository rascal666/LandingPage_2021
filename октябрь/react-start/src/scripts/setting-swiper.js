import Swiper from 'swiper/bundle';

const swiper = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 2.2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    // centerSlides: true,

    // If we need pagination
    pagination: {
        el: ".pagination-swiper",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.35,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
        },
    },
});


const swiperr = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2.2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    // centerSlides: true,

    // If we need pagination
    pagination: {
        el: '.pagination-swiper',
    },
    autoplay: {
        delay: 3000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.4,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
        },
    },
});