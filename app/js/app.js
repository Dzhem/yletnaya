// // Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import goodshare from 'goodshare.js';

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/app/libs/magnific-popup/jquery.magnific-popup.min.js');
require('~/app/libs/slick/slick.js');
// require('~/app/libs/ajax-form/ajax-form.js');

document.addEventListener('DOMContentLoaded', () => {

    // Custom JS
    $('.menu-btn').on('click', () => {
        $('.navigation').toggleClass('show');
    });

    genBreadcrumb();

    function genBreadcrumb() {
        const pageName = document.location.pathname;
        const breadcrumbActive = document.querySelector('.breadcrumb>.active');
        const pages = {
            '/dostavka-i-oplata.html': 'Доставка и Оплата',
            '/kontaktyi.html': 'Контакты',
            '/skidki-i-akczii.html': 'Скидки'
        }

        for (let page in pages) {
            if (page === pageName) {
                breadcrumbActive.textContent = pages[page];
            }
        }
    }

    $('.zoom').magnificPopup({
        type: 'image',
        image: {
            titleSrc: 'title'
        }
    });
    $('.zoom-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });
    $('.zoom-gal-mob').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });
    $('.modal-window').magnificPopup({
        type: 'inline'
    });
    $.extend(true, $.magnificPopup.defaults, { // перевод для magnific-popup
        tClose: 'Закрыть (Esc)', // Alt text on close button
        tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Предыдущий', // Alt text on left arrow
            tNext: 'Следующий', // Alt text on right arrow
            tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
        },
        image: {
            tError: 'Не удалось загрузить <a href="%url%">изображение</a>.' // Error message when image could not be loaded
        },
        ajax: {
            tError: 'Не удалось загрузить <a href="%url%">содержимое</a>.' // Error message when ajax request failed
        }
    });

    var sliderWrapper = $('.slider-wrapper');
    sliderWrapper.removeClass('loading');
    if (sliderWrapper.data('adaptive') == '1') {
        $(window).resize(function () {
            var sliderHeight = parseInt(sliderWrapper.data('height')) * $(sliderWrapper).width() / parseInt(sliderWrapper.data('width'));
            sliderWrapper.css('height', sliderHeight + 'px');
        }).trigger('resize');
    }

    $('.slick-slider').show().slick({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        fade: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

});