// // Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import goodshare from 'goodshare.js';

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

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


});