$(document).ready(function () {
    //Слайдер на главной странице
    $(".js-index-slider").slick({
        prevArrow: ".index-slider__controls--prev",
        nextArrow: ".index-slider__controls--next",
        dots: true,
        vertical: true,
        customPaging: function() {
            return '<a class="index-slider__dots"></a>';
        },
    });

    //Слайдер рекомендованых товаров
    $(".js-recommended-slider").slick({
        prevArrow: ".recommended-slider  .product-prev-slider__controls--prev",
        nextArrow: ".recommended-slider  .product-prev-slider__controls--next",

       appendDots: '.recommended-slider  .product-prev-slider__nav',
       dots: true,
       slidesToShow: 4,
       slidesToScroll: 1,
        customPaging: function() {
            return '<a class="recommended-slider__dot"></a>';
        },
    });

    //Слайдер непропустите наши товары
    $(".js-do-not-miss-slider").slick({
        prevArrow: ".do-not-miss-slider  .product-prev-slider__controls--prev",
        nextArrow: ".do-not-miss-slider  .product-prev-slider__controls--next",

        appendDots: '.do-not-miss-slider  .product-prev-slider__nav',
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPaging: function() {
            return '<a class="recommended-slider__dot"></a>';
        },
    });
    
    function indexSliderElemPos(elem,pos) {
        let windowsWidth = $(window).width(),
            containerWidth = $('.container').width(),
            leftPos = (windowsWidth-containerWidth)/2;
        $('.index-slider ' + elem).css(pos, leftPos);
    }
    indexSliderElemPos('.slick-dots', 'left');
    indexSliderElemPos('.index-slider__controls', 'right');



    $(window).resize(function () {
        indexSliderElemPos('.slick-dots', 'left');
        indexSliderElemPos('.index-slider__controls', 'right');
    });



    $('.video-start').on('click', function () {

        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubePlayerAPIReady = function () {
                onYouTubePlayer();
            };
        }
        var videoID = $(this).parent().parent().data('video-id'),
            videoPlayer = $(this).parent().parent().attr('id');
        player = new YT.Player(videoPlayer, {
            height: '360',
            width: '640',
            videoId: videoID
        });
    });
    
});