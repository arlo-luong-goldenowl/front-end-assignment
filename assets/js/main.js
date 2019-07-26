$(document).ready(function () {
  checkAndSetNavbarBG();
  windowScrollEvent();
  initOwlCarousel();
})

function checkAndSetNavbarBG() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 2) {
    $('.c-navbar').addClass('black-bg')
  } else {
    $('.c-navbar').removeClass('black-bg')
  }
}

function windowScrollEvent() {
  $(window).scroll(function (e) {
    checkAndSetNavbarBG();
  });
}

function initOwlCarousel() {
  $('.owl-carousel-projects').owlCarousel({
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      965: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })

  $('.owl-carousel-clients').owlCarousel({
    nav: false,
    dots: false,
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 5
      },
      1200: {
        items: 7
      }
    }
  })

  $('.owl-carousel-quotes').owlCarousel({
    nav: false,
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  })
}
