function toggleCart() {
  var element = document.getElementById('custom_drop_item_id');
  element.classList.toggle('custom_drop_item_class');
}

// Latest Slider
$('.new_slider').slick({
  infinite: true,
  slidesToShow: 5,
  prevArrow:
    '<span class="prev_arrow_latest"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow_latest"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
