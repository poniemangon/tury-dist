$(document).ready(function () {
    var $header = $('.header-section'); 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });
});

$(document).ready(function () {
    const style = document.createElement('style');
    style.innerHTML = `
       body hs-cmsf-branding {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
        }
    `;
    document.head.appendChild(style);
    
});


$(document).ready(function () {
    var $burger = $('.fa-bars');
    var $menu = $('.header-section ul');
    var $header = $('.header-section');

    function checkWindowSize() {
        if ($(window).width() > 992) {
            $menu.show(); 
            $header.removeClass('open'); 
        } else {
            $menu.hide(); 
        }
    }

 
    checkWindowSize();


    $burger.on('click', function () {
        if ($(window).width() <= 992) {
            $menu.slideToggle();
            $header.toggleClass('open');
        }
    });

  
    $(window).on('resize', function () {
        checkWindowSize();
    });
});





    $('.product-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    
    $(document).ready(function() {
        var $carousel = $('.product-slider');
        var lineWidth = $('.slide-progress .line').width();
    
        function updateProgressBar(currentSlide) {
            var carouselWidth = $('.slide-progress').width();
            var totalSlides = $carousel.slick('getSlick').slideCount;
            var pixelPerSlide = carouselWidth / (totalSlides - 1);
    
            var currentPixels = currentSlide * pixelPerSlide;
    
            if (currentSlide === 0) {
                currentPixels = 0;
            } else if (currentSlide === totalSlides - 1) {
                currentPixels -= lineWidth;
            } else {
                currentPixels -= lineWidth / 2;
            }
    
            currentPixels = Math.max(0, Math.min(currentPixels, carouselWidth - lineWidth));
    
            $('.slide-progress .line').css('left', currentPixels + 'px');
        }
    
        $carousel.on('afterChange', function(event, slick, currentSlide) {
            updateProgressBar(currentSlide);
        });
    
        $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            updateProgressBar(nextSlide);
        });
    
        $(window).on('resize', function() {
            updateProgressBar($carousel.slick('slickCurrentSlide'));
        });
    });
    
    
    
    function onScroll() {
        document.querySelectorAll(".animate-on-scroll").forEach((element) => {
            let rect = element.getBoundingClientRect();
            let windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 100) {
                element.classList.add("visible", element.dataset.animation);
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); 