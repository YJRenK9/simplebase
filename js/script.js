// document.addEventListener("DOMContentLoaded", function () {
//     // Your code here will run after the DOM is fully loaded
//     console.log("Document is ready!");

//     // global functions go here
//     this.style.backgroundColor = "aqua";
// });
const siteNav = document.querySelector('.site-nav');
const menuButton = document.querySelector('.menu-button');

// Ensure the menu is closed when resizing above 768px?
menuButton.addEventListener('resize', () => {
    if(window.outerWidth > 768) {
        siteNav.setAttribute('data-menustate', 'closed');
    }
});

menuButton.addEventListener('click', () => {
    const currentState = siteNav.getAttribute('data-menustate');

    if (siteNav.getAttribute('data-menustate') === 'closed') {
        siteNav.setAttribute('data-menustate', 'open');
    } else {
        siteNav.setAttribute('data-menustate', 'closed');
    }

    console.log("Ay you got any ramen yo!");
    console.log(siteNav.getAttribute('data-menustate'));
});