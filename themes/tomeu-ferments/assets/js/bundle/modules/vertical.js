import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function (sliderContainer = '.swiper-vertical', slidesperView= 15, slidesperViewMobile= 15, slidesperViewTablet=15, spaceBetwwen= 20, spaceBetwwenMobile= 20) {

    function init($this) {

        var  $el = $this.find('.swiper-container'),
            pagination = $this.find('.swiper-pagination'),
            effect = $this.attr('data-effect') ? $this.attr('data-effect') : "slide",
            paginationType = $this.attr('data-pagination-type') ? $this.attr('data-pagination-type') : "dots",
            navNext = $this.find('.swiper-slider-next'),
            navPrev = $this.find('.swiper-slider-prev');
        const slider = new Swiper($el[0], {
            effect: effect,
            slidesPerView: slidesperViewMobile,
            spaceBetween: spaceBetwwenMobile,
            direction: 'vertical',
            mousewheelControl: true,
            pagination: {
                el: pagination[0],
                type: paginationType
            },
            // Navigation arrows
            navigation: {
                nextEl: navNext[0],
                prevEl: navPrev[0],
            },
            breakpoints: {
                "768": {
                    slidesPerView: slidesperViewTablet,
                    spaceBetween: spaceBetwwen,
                },
                "1280": {
                    slidesPerView: slidesperView,
                    spaceBetween: spaceBetwwen,
                },
            }

        })
    }
    window.setTimeout(function () {
        var $swiperContainer = $(sliderContainer);
        if ($swiperContainer.length) {
            $swiperContainer.each(function(i, Slider) {
                init($(Slider));
            })
        }
    });

}
