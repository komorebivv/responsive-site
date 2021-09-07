// inicjacja Owl Carusel slider -> zeby zadziałało trzeba dać klase 
// którą utworzyliśmy w divie owl-carosuel w tym przypadku .homepage-slider
$('.homepage-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    center: true,
})

$(window).on('scroll', function () {
    if (window.scrollY > 0) {
        $('.navigation').addClass('move')
    } else {
        $('.navigation').removeClass('move')
    }
});

$('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active');
    $('body').toggleClass('menuOpen');

})


AOS.init();