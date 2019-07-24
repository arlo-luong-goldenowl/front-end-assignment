$(document).ready(function(){
  checkAndSetNavbarBG();
  windowScrollEvent();
  initOwlCarousel();
})

function checkAndSetNavbarBG() {
  let scrollTop = $(window).scrollTop();
  if(scrollTop > 2){
    $('.c-navbar').addClass('black-bg')
  }else{
    $('.c-navbar').removeClass('black-bg')
  }
}

function windowScrollEvent(){
  $(window).scroll(function(e){
    checkAndSetNavbarBG();
  });
}

function initOwlCarousel(){
  $('.owl-carousel').owlCarousel({
    nav:false,
    // dots:false,
    margin:20,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
}
