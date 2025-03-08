$(document).ready(function () {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Sous-menu
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Sous-menu langues
    $('.languages').on('click', function () {
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-active')) {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
        } else {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-active');
        }
    });

    // Sous-menu nav computer close
    $(document).click(function (event) {
        var clickover = $(event.target);
        var $dropdown = $(".dropdown.clic-sub-menu.open");
        var $submenu = $(".dropdown-menu.sub-menu.sub-menu-active");

        // Vérifie si le clic a été fait en dehors du dropdown ou du sous-menu ouvert
        if (!$dropdown.is(clickover) && $dropdown.has(clickover).length === 0 &&
            !$submenu.is(clickover) && $submenu.has(clickover).length === 0) {
            $dropdown.removeClass('open');
            $submenu.removeClass('sub-menu-active');
        }
    });

    // Créer des classes en fonction de la data météo du canva
    $('.weather-icon').each(function () {
        var weatherIcon = $(this).attr('data');
        $(this).closest('.meteo').addClass('weather-' + weatherIcon);
    });

    // Générer le png/ l'image en fonction de la data
    $('.weather-icon').each(function () {
        var weatherIcon = $(this).attr('data');
        var baseUrl = $(this).closest('.infos-center-meteo').data('url');
        var iconPath = baseUrl + weatherIcon + '.png';
        
        $(this).closest('.meteo').find('.infos-center-meteo').css({
            'background-image': 'url(' + iconPath + ')',
            'background-size': 'cover'
        });
    });

    // Presta qui s'agrandit au clic et inverse son css
    $('.presta-contain-one').click(function () {
        $(this).addClass('is-active');
        $('.presta-contain-two').removeClass('is-active');
        $('.presta-contain-three').removeClass('is-active');
    });
    $('.presta-contain-two').click(function () {
        $(this).addClass('is-active');
        $('.presta-contain-one').removeClass('is-active');
        $('.presta-contain-three').removeClass('is-active');
    });
    $('.presta-contain-three').click(function () {
        $(this).addClass('is-active');
        $('.presta-contain-one').removeClass('is-active');
        $('.presta-contain-two').removeClass('is-active');
    });

    // Fonction pour mettre à jour l'image dans la div big-photo-contain
    function updateBigPhotoContain(src, alt) {
        $('#active-image').attr('src', src).attr('alt', alt);
    }

    // Gestion du clic sur une image de la galerie
    $('.slider-gallery').on('click', 'img', function () {
        var clickedImageSrc = $(this).attr('src');
        var clickedImageAlt = $(this).attr('alt');
        
        updateBigPhotoContain(clickedImageSrc, clickedImageAlt);
    });
});

$(document).ready(function () {
    $('.home-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1041: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.slider-meteo').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
                items: 1,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
                items: 3,
            },
            1041: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
                items: 4,

            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: false,
                items: 4,
            },
        }
    });
    $('.slider-options').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1041: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1220: {
                items: 3,
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.slider-gallery').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                items: 6,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1041: {
                items: 6,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1220: {
                items: 6,
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        },
    });
    $('.avis-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: true,
            },
            1041: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: true,
            },
            1220: {
                items: 3,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.detail-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1041: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
});