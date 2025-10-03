import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function () {

    window.setTimeout(function () {

        var swiper = new Swiper('.swiper-carousel-news', {
            pagination: {
                el: '.swiper-pagination-news',
                type: 'progressbar'
            },
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0
        });
        $(".js-categories a").on("click", function(e){
            e.preventDefault();
            var filter = $(this).attr('data-category');
            $('.swiper-carousel-news').fadeOut('fast');
            window.setTimeout(()=> {
            $(".js-categories a").removeClass("is-active");
            $(this).addClass("is-active");
            if($('[data-filter]').parents('.swiper-wrapper').length > 0) {
                if(filter=="*"){
                    $("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
                    swiper.destroy();
                    swiper = new Swiper('.swiper-carousel-news', {
                        pagination: {
                            el: '.swiper-pagination-news',
                            type: 'progressbar'
                        },
                        slidesPerView: 'auto',
                        paginationClickable: true,
                        spaceBetween: 0
                    });
                }
                else {
                    $(".swiper-carousel-news .swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
                    $(".swiper-carousel-news [data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();

                    swiper.destroy();
                    swiper = new Swiper('.swiper-carousel-news', {
                        pagination: {
                            el: '.swiper-pagination-news',
                            type: 'progressbar'
                        },
                        slidesPerView: 'auto',
                        paginationClickable: true,
                        spaceBetween: 0
                    });
                }
                $('.swiper-carousel-news').fadeIn();
            } else {
                if(filter=="*") {
                    $("[data-filter]").fadeIn();
                }
                else {
                    $("[data-filter]").not("[data-filter='"+filter+"']").hide();
                    $("[data-filter='"+filter+"']").fadeIn();
                }
            }
            }, 200);

        })
    });

}
