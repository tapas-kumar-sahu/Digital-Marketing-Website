// Header Scroll
let nav = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
})

// nav hide
let collapse = document.querySelector(".navbar-collapse.collapse");
let navItems = document.querySelectorAll(".nav-link");
for(let item of navItems){
    item.addEventListener("click",()=>{
        collapse.classList.remove("show");
    })
}

// Owl Carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});


