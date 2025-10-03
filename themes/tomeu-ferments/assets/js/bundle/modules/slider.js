import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function (sliderContainer = '.swiper-slider', effect= 'slide', space =  0, paginationType= 'bullets', customPagination= null) {

    function init($this) {

        var  $el = $this.find('.swiper-container'),
        pagination = $this.find('.swiper-pagination'),
        effect = $this.attr('data-effect') ? $this.attr('data-effect') : "fade",
        navNext = $this.find('.swiper-slider-next'),
        navPrev = $this.find('.swiper-slider-prev');
        const slider = new Swiper($el[0], {
            effect: 'slide',
            draggable: true,
            spaceBetween: space,
            pagination: 
                {
                    el: pagination[0],
                    clickable: true,
                    renderBullet: function (index, className) {
                        // Agregar cero delante si el índice es menor que 9
                        var slideNumber = (index < 9) ? '0' + (index + 1) : (index + 1);
                        return '<div class="c-slider__pagination"> <span>' + slideNumber + '</span> <span class="'+ className +'"></span></div>'
                        // return '<span class="' + className + '">' + slideNumber + "</span>";
                     },
                },
            // Navigation arrows
            navigation: {
                nextEl: navNext[0],
                prevEl: navPrev[0],
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
