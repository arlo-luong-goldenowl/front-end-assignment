$(document).ready(function() {
  checkAndSetNavbarBG();
  windowScrollEvent();
  initOwlCarousel();

  $(".c-link").on("click", function(e) {
    e.preventDefault();
    let currentWidth = $(window).width();
    //if current navbar is toggle navbar
    if (currentWidth <= 990) {
      //toggle navbar when click
      $(".c-navbar-toggler").trigger("click");
    }
    //get href of link when clicked
    var id = $(this).attr("href");
    //scroll to ...
    if (id === "#home") {
      window.scrollTo(0, 0);
    } else {
      var elm = $(id);
      window.scrollTo(0, elm.offset().top);
    }
    $(".c-link").removeClass("c-active");
    $(this).addClass("c-active");
  });
});

function checkAndSetNavbarBG() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 2) {
    $(".c-navbar").addClass("black-bg");
  } else {
    $(".c-navbar").removeClass("black-bg");
  }
}

function windowScrollEvent() {
  $(window).scroll(function(e) {
    checkAndSetNavbarBG();
  });
}

function initOwlCarousel() {
  $(".owl-carousel-projects").owlCarousel({
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
  });

  $(".owl-carousel-clients").owlCarousel({
    nav: false,
    dots: false,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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
  });

  $(".owl-carousel-quotes").owlCarousel({
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
  });
}
