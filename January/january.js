var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    setWrapperSize: true,
    //     autoplay: {
    //     delay: 1000,
    //   },
    simulateTouch: true,
    mousewheel: {
        sensitivity: 1,
    },

    navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
        disabledClass: 'slider-item-buttonEnd',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'bullets',
    },


})