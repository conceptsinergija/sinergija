import SmoothScroll from './smoothScroll.js'

(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }


  if(document.querySelector('#concept-section-cta')){
    const autoplaySpeed = 4000

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


  if(document.querySelector('#faq')) {
    const faqTitlesItems = document.querySelectorAll('.faq-category')
    const faqCategorySections = document.querySelectorAll('.faq-category-section')

    // set all 'hidden' except 1st
    faqCategorySections.forEach((fcs, index) => {
      if(index !== 0) {
        fcs.classList.add('hidden')
      }
    })

    faqTitlesItems.forEach((fi) => {
      fi.addEventListener('click', () => {
        faqTitlesItems.forEach(fit => {
          if(fit.classList.contains('active'))
            fit.classList.remove('active')
        })

        const activeCategory = fi.dataset.categoryName

        faqCategorySections.forEach((fcs) => {
          if(fcs.id === activeCategory){
            if(fcs.classList.contains('hidden'))
              fcs.classList.remove('hidden')
          } else {
            fcs.classList.add('hidden')
          }
        })
        fi.classList.add('active')
      })
    })
  }

  if(document.querySelector('.single-program-page') && document.querySelector('#program-hero-slider')) {
    new Swiper('#singleProgramHeroSlider', {
      cssMode: true,
      loop: true,
      responsive: true,
      autoplay: {
        delay: 2500,
        loop: true,
        disableOnInteraction: false,
        // waitForTransition: false
      },
      keyboard: true,
    })
  }









   var swiper = new Swiper(".topSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".topSwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });


  //mission scroll menu


  if (document.querySelector('#our_mission')) {

  let filterBox = document.querySelector('.filters')
  let filterItems = document.querySelectorAll('.filter-link')
  filterBox.addEventListener('click', (e) => {
   
    filterItems.forEach(fn => {

      if(fn.classList.contains('active')) {
        fn.classList.remove('active')
      }    
    })
    let closestItem = e.target.closest('.filter-link')
  if (closestItem)  {
    closestItem.classList.add('active')
    }
  })


  //if one of the mission boxes will get to the top of the page, 
  //filter link with the same dataset.category will get an 'active' class and the dot will get red background

  let missionBoxes = document.querySelectorAll('.mission-box');

  window.onscroll = function () {
   missionBoxes.forEach(box => {
        if(box.getBoundingClientRect().top < 15) {
          //box.classList.add('active')
          filterItems.forEach( item => {
            if( box.dataset.category == item.dataset.category) { //box.classList.contains('active')
              item.classList.add('active')
            } 
            if(box.dataset.category !== item.dataset.category) { //box.classList.contains('active') && 
              item.classList.remove('active')
            } 
          })
        } 
        //if(box.getBoundingClientRect().top > 15) {
         //box.classList.remove('active') 
        //}
      })        
  }
}



  // document.body.addEventListener('onload', init())

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

})()