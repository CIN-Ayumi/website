"use strict";

// swiper

if (window.matchMedia('(max-width: 991px)').matches) {
  //スマホ処理
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });  
} else if (window.matchMedia('(min-width:992px)').matches) {
  //PC処理
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
}

// フェードインアニメーション

$('.fadeInTrigger').on('inview', function(event, isInView) {
  if (isInView) {//fadeInTriggerが表示領域に入った時
    $(this).addClass('animate__animated animate__fadeIn');//クラス名が付与
  } else {//表示領域から出た時
    $(this).removeClass('animate__animated animate__fadeIn');//クラス名が除去
  }
});
