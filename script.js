$(document).ready(function () {
  const carousel = (container, margin) => {
    $(container).owlCarousel({
      loop: true,
      margin: margin,
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
      },
    });
  };

  carousel(".featured-products", 10);
  carousel(".new-arrival-products", 70);
  carousel(".product-categories", 20);
  carousel(".brands", 20);
});
