$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      effect:'fade',
      speed:1000,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type:'bullets',
      },
      autoplay:{
        delay:3000,
      },
  })
})
