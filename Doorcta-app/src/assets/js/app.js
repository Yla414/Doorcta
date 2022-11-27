'use strict';

// swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
});

// accordion
// select all divs with a data attribute = 'data-accordion'
const accordion = document.querySelectorAll('[data-accordion]');

// then select all buttons with a data attribute = 'data-accordion-btn'
const accordionButton = document.querySelectorAll('[data-accordion-btn]');

// loop through all the accordionButtons 
for (let i = 0; i < accordionButton.length; i++) {
    // create click listener for all the buttons to carry out a function when clicked
    accordionButton[i].addEventListener('click', function () {
        // set a variable to which the class 'active' is added when clicked
        const accordionButtonClicked  = this.nextElementSibling.classList.contains('detail-is-active');

        // loop through all accordions
        for(let i = 0; i < accordion.length; i++) {
            // create a logic that tests if an accordion button is clicked. If true, then break the operation
            if (accordionButtonClicked) break;

            // also test if an accordion contains the class of 'active'
            if (accordion[i].classList.contains('detail-is-active')) {

                // if the above statement is true, then the following statement run
                accordion[i].classList.remove('detail-is-active');
                accordionButton[i].classList.remove('active');
            }
        }
        // the statements below toggle the activity of the accordion and the accordionButton
        this.nextElementSibling.classList.toggle('detail-is-active');
        this.classList.toggle('active');
    })
}

// Toggle navbar
const menuBtn = document.getElementById('menu-btn').addEventListener('click', function() {
    const bar1 = document.getElementById('bar-1');
    const bar2 = document.getElementById('bar-2');
    const bar3 = document.getElementById('bar-3');
    
    const mobileNav = document.getElementById('mobile-nav');

    bar1.classList.toggle('rotate-clockwise');
    bar2.classList.toggle('remove-second-bar');
    bar3.classList.toggle('rotate-anticlockwise');

    mobileNav.classList.toggle('slide-out');
});
