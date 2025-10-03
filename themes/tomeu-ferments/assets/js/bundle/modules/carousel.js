import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

const SWIPER_CONFIG_KEY = '__swiper_config';

export default function carousel(carouselContainer = '.swiper-carousel', slidesperView= 3, slidesperViewMobile= 1, spaceBetwwen= 20, spaceBetwwenMobile= 20, arrowPrev= '.swiper-carousel-services-prev', arrowNext='.swiper-carousel-services-next', paginat='.swiper-rooms-pagination', paginationType='bullets',centered=false, sliderLoop= false, slidesperViewTablet=3, refresh=false, effect='slide', autoplay=null, freemode=false) {

    if(refresh) {
        var $swiperContainer = $(carouselContainer);
        if ($swiperContainer.length) {
            $swiperContainer.each(function(i, Slider) {
                init($(Slider));
            })
        }
    }
    function init($this) {
        var  $el = $this.find('.swiper-container'),
            pagination = $this.find(paginat),
            navNext = $this.find(arrowNext),
            navPrev = $this.find(arrowPrev)


        // Verificar si ya existe una instancia de Swiper en el contenedor actual
        const existingConfig = $el.data(SWIPER_CONFIG_KEY);
        if (existingConfig) {
            existingConfig.swiper.update(); // Actualizar la instancia existente
            return;
        }


        let slider = new Swiper($el[0], {
            slidesPerView: slidesperViewMobile,
            spaceBetween: spaceBetwwenMobile,
            effect: effect,
            freeMode: false,
            slideToClickedSlide: false,
            loop: sliderLoop,
            slidesOffsetAfter: 2,
            speed: 1000,
            freemode: freemode,
            autoplay: autoplay !== null ? {
                delay: autoplay,
                disableOnInteraction: false,
            } : false, // Activa el autoplay si autoplay no es false
            pagination: {
                el: pagination[0],
                type: paginationType,
            },
            navigation: {
                nextEl: navNext[0],
                prevEl: navPrev[0],
            },
            breakpoints: {
                "900": {
                    slidesPerView: slidesperViewTablet,
                    spaceBetween: spaceBetwwen,
                    centeredSlides: centered,
                    slideToClickedSlide: true,
                },
                "1520": {
                    slidesPerView: slidesperView,
                    spaceBetween: spaceBetwwen,
                    centeredSlides: centered,
                },
            }
        })
        $el.data(SWIPER_CONFIG_KEY, { swiper: slider });
    }
    window.setTimeout(function () {
        var $swiperContainer = $(carouselContainer);
        if ($swiperContainer.length) {
            $swiperContainer.each(function(i, Slider) {
                init($(Slider));
            })
        }
    });

}
