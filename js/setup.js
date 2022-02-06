$('.carrosel .owl-carousel').owlCarousel({
    stagePadding: 80,
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2,
            stagePadding: 22,
            dots:false,
        },
        400:{
            items:2,
            stagePadding: 30,
            dots:false,
        },
        600:{
            items:3,
            stagePadding: 45,
        },
        800:{
            items:3,
        },
        900:{
            items:3,
            stagePadding: 80,
        },
        1000:{
            items:4,
            stagePadding: 80,
        },
        1420:{
            items:5,
            stagePadding: 80,
        }

    }
})
