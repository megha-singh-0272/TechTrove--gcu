document.addEventListener('DOMContentLoaded', function () {
    const btnHamburger = document.querySelector('#btnHamburger');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const fadeElements = document.querySelectorAll('.has-fade');
    const mobileMenuLinks = document.querySelectorAll('.header_mobile_menu a');


    btnHamburger.addEventListener('click', function () {
        console.log("Click hamburger");

        if (header.classList.contains('open')) {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElements.forEach(function (element) {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        } else {
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElements.forEach(function (element) {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
    });

    
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElements.forEach(function (element) {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        });
    });

   
    let slideIndex = 0;

   
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
});

