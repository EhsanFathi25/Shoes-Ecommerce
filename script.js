$(document).ready(function () {
    $(".featured-products").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                item: 1,
            },
            600: {
                item: 2,
            },
            900: {
                item: 3,
            },
            1200: {
                item: 4,
            },
        },
    });
});