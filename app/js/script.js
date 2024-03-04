const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

// hamburger animation menu
btnHamburger.addEventListener('click', function()
{
    console.log("click hamburger");

    if(header.classList.contains('open')) //close hamburger menu
    {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        })

    }
    else //open hamburger menu
    {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(function(element){

        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    })
    
    }
}
);


//gallery automatic slide 
var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }