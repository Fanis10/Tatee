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

let SlidersArray = []
function sliderProjectInfo() {
    $(".project-info__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        SlidersArray[index] = new Swiper(`.project-info__slider[data-slider-id="${index}"] .swiper`, {
            slidesPerView: 1,
            spaceBetween: 15,
            pagination: {
                el: `.project-info__slider[data-slider-id="${index}"] .swiper-pagination`,
                clickable: true
            },
        })
    })
}

let SlidersArray2 = []
function sliderProjectInfo2() {
    $(".project-info__slider2").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        SlidersArray2[index] = new Swiper(`.project-info__slider2[data-slider-id="${index}"] .swiper`, {
            slidesPerView: 3,
            spaceBetween: 35,
            pagination: {
                el: `.project-info__slider2[data-slider-id="${index}"] .swiper-pagination`,
                clickable: true
            },
            breakpoints: {
                320: {
                    spaceBetween: 15,
                },
                992: {
                    spaceBetween: 35,
                }
            }
        })
    })
}


$(document).ready(function () {
  sliderHomeMain();
  sliderProjectInfo();
  sliderProjectInfo2();

    // Tabs
    $(".tab").click(function () {
        let path = $(this).attr("data-tab-path")
        $(this).siblings(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")

        $(this).parents(".tabs-inner").find(".tab__content").removeClass("tab__content--active")
        $(this).parents(".tabs-inner").find(`.tab__content[data-content-path="${path}"]`).addClass("tab__content--active")
    })

    //Modal
    $('.modal').on('show.bs.modal', function (e) {
        $('.modal').not(this).modal('hide');
    });

})


