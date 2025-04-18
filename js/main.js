function sliderHomeMain() {
    var swiper = new Swiper('.home-main .mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".home-main .swiper-pagination",
            clickable: true,
        },
    })
}

$(document).ready(function () {
  sliderHomeMain();


})


