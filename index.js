"use strict"

// показать меню при клике на бургер, заборонили scroll body при відкритому меню-бургер

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(menuIcon) {menuIcon.addEventListener("click", function menu(e) {
        document.body.classList.toggle('lock');
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    })
}

// прокрутка при click menu links

const menuLinks = document.querySelectorAll('.header__content_nav-btn[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        e.preventDefault();
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('lock');
                menuBody.classList.remove('_active');
                menuIcon.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }
}  

// прокрутка при click up page

const upLink = document.querySelectorAll('.uppage[data-goto]');

if (upLink.length > 0) {
    upLink.forEach(up => {
        up.addEventListener("click", onUpLinkClick)
    });

    function onUpLinkClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}



