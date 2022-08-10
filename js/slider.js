$(document).ready(function () {
  var mainOwl = $(".owl-carousel.main-carousel");
  mainOwl.owlCarousel({
    autoplay: false,
    smartSpeed: 1800,
    loop: true,
    nav: true,
    navText: true,
    dots: true,
    mouseDrag: true,
    margin: 10,
    navigation: true,
    navigationText: [
      '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>',
      '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>',
    ],
    slideBy: 1,
    items: 1,
  });

  // tween for Main Slider Owl change
  mainOwl.on("changed.owl.carousel", function (e) {
    var scrollController = new ScrollMagic.Controller();

    $(".owl-carousel.main-carousel #first-p").each(function () {
      var fadeUpScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1,
      })
        .setTween(
          TweenMax.from(this, 1, { scale: 0, ease: Power1.easeIn, delay: 1 })
        )
        .addTo(scrollController);
    });
    $(".owl-carousel.main-carousel .slide1 img").each(function () {
      var fadeUpScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1,
      })
        .setTween(
          TweenMax.from(this, 1, {
            x: 50,
            opacity: 0,
            ease: Power1.easeOut,
            delay: 0.5,
          })
        )
        .addTo(scrollController);
    });
  });
});

//video Slider

$(function () {
  // Owl Carousel
  var owl = $(".video-carousel");
  owl.owlCarousel({
    smartSpeed: 1800,
    autoplay: true,
    items: 2,
    margin: 10,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  });
});

//client Slider

$(function () {
  // Owl Carousel
  var owl = $(".client-carousel");
  owl.owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
  });
});

// $(document).ready(function () {
//   var videoOwl = $(".owl-carousel.video-carousel");
//   videoOwl.owlCarousel({
//     autoplay: true,
//     smartSpeed: 800,
//     loop: true,
//     nav: true,
//     navText: true,
//     dots: false,
//     mouseDrag: true,
//     margin: 10,
//     navigation: true,
//     navigationText: [
//       '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>',
//       '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>',
//     ],
//     // slideBy: 1,
//     items: 2,
//   });

//   // tween for Main Slider Owl change
//   videoOwl.on("changed.owl.carousel", function (e) {
//     var scrollController = new ScrollMagic.Controller();

//     $(".owl-carousel.video-carousel #first-p").each(function () {
//       var fadeUpScene = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 1,
//       })
//         .setTween(
//           TweenMax.from(this, 1, { scale: 0, ease: Power1.easeIn, delay: 1 })
//         )
//         .addTo(scrollController);
//     });
//     $(".owl-carousel.video-carousel .slide1 img").each(function () {
//       var fadeUpScene = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 1,
//       })
//         .setTween(
//           TweenMax.from(this, 1, {
//             x: 50,
//             opacity: 0,
//             ease: Power1.easeOut,
//             delay: 0.5,
//           })
//         )
//         .addTo(scrollController);
//     });
//   });
// });
