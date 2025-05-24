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
    $(function() {
        var baseZIndex = 1050;
        var currentZIndex = baseZIndex;
    
        $(document).on('show.bs.modal', '.modal', function() {
            currentZIndex++;
            $(this).css('z-index', currentZIndex);
            var backdrop = $('.modal-backdrop').last();
            backdrop.css('z-index', currentZIndex - 1);
        });
    
        $(document).on('hidden.bs.modal', '.modal', function() {
            var openModals = $('.modal.show');
            if (openModals.length > 0) {
                var lastModal = openModals.last();
                var zIndex = parseInt(lastModal.css('z-index'));
                var backdrop = $('.modal-backdrop').last();
                backdrop.css('z-index', zIndex - 1);
            }
        });
    });
    
    $(document).ready(function() {
        function updateBodyClass() {
            if ($('.modal.show').length > 0) {
                if (!$('body').hasClass('modal-open')) {
                    $('body').addClass('modal-open');
                }
            } else {
                $('body').removeClass('modal-open');
            }
        }
    
        $(document).on('shown.bs.modal', function() {
            updateBodyClass();
        });
    
        $(document).on('hidden.bs.modal', function() {
            updateBodyClass();
        });
    });

})



