import SmoothScroll from './smoothScroll.js'

(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }


  if(document.querySelector('#concept-section-cta')){
    const autoplaySpeed = 333000

    // Our concept images Slider
    let ourConceptSliderImages = new Swiper(".conceptSwiperImages", {
      slidesPerView: 1.3,
      spaceBetween: 80,
      loop: true,
      freeMode: false,
      autoplay: {
        delay: autoplaySpeed,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Our concept Text Slider
    let ourConceptSwiperText = new Swiper(".conceptSwiperText", {
      slidesPerView: 1,
      loop: true,
      freeMode: false,
      autoplay: {
        delay: autoplaySpeed,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })

    

    if(document.querySelector('#ourConceptPauseBtn') && document.querySelector('#ourConceptPlayBtn')) {
      const pauseBtn = document.querySelector('#ourConceptPauseBtn')
      const playBtn = document.querySelector('#ourConceptPlayBtn')

      pauseBtn.addEventListener('click', () => {
        ourConceptSliderImages.autoplay.stop()
        ourConceptSwiperText.autoplay.stop()
        pauseBtn.classList.add('hidden')
        playBtn.classList.remove('hidden')
      })

      playBtn.addEventListener('click', () => {
        ourConceptSliderImages.autoplay.start()
        ourConceptSwiperText.autoplay.start()
        pauseBtn.classList.remove('hidden')
        playBtn.classList.add('hidden')
      })
    }
  }

  if(document.querySelector('#galery-cta') && document.querySelector('.galerySwiper')) {
    let galerySwiper = new Swiper(".galerySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }

  if(document.querySelector('#testimonials') && document.querySelector('.testimonialSwiper')) {
    let testimonialSwiper = new Swiper('.testimonialSwiper', {
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }







  // document.body.addEventListener('onload', init())

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

})()