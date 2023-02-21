import SmoothScroll from './smoothScroll.js'

(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let TOGGLE_MENU = false;

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)

  function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }



  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const header = document.querySelector('#header');
  const logo = document.querySelector('.header-logo')
  burger.addEventListener('click', () => {
    TOGGLE_MENU = !TOGGLE_MENU
    if (TOGGLE_MENU) {
      mobileMenu.classList.remove('hidden');
      header.classList.add('open-burger')
      header.classList.add('black')
      header.classList.add('mobile-menu-height')
      logo.classList.add('transparent')

    }
    if (!TOGGLE_MENU) {
      mobileMenu.classList.add('hidden');
      header.classList.remove('open-burger')
      logo.classList.remove('transparent')
      header.classList.remove('mobile-menu-height')
      header.classList.remove('black')
    }

  })
  


  if(document.querySelector('#concept-section-cta')){
    const autoplaySpeed = 4000
    // Our concept images Slider
   
    let ourConceptSliderImages = new Swiper(".conceptSwiperImages", {
      /*slidesPerView: 1.3,
      spaceBetween: 80,*/
      slidesPerView: 1,
      spaceBetween: 20,
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
    if(window.innerWidth < 768) {
      new Swiper(".galerySwiper", {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          loop: true,
          disableOnInteraction: false,
          // waitForTransition: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    }
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

  if(document.querySelector('#meet-the-team')) {
    var swiper = new Swiper('.meet-the-team-slider', {
      spaceBetween: 30,
      slidesPerView: screen.width < 450 ? 1 : 3 ,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
};


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
    let missionBoxes = document.querySelectorAll('.mission-box');
    let filterItems = document.querySelectorAll('.filter-link')
    
    filterBox.addEventListener('click', (e) => {
      filterItems.forEach(fn => {
        if(fn.classList.contains('active')) {
          fn.classList.remove('active')
        } 
      })

      
      const closestItem = e.target.closest('.filter-link')
      missionBoxes.forEach( box => {
        if( closestItem.dataset.category == box.dataset.category) { 
          box.scrollIntoView({behavior: 'smooth'})
        } 
        
      })
      if (closestItem)  {
        closestItem.classList.add('active')
      }
    })


    //if one of the mission boxes will get to the top of the page, 
    //filter link with the same dataset.category will get an 'active' class and the dot will get red background


    window.onscroll = function () {
    missionBoxes.forEach(box => {
        if(box.getBoundingClientRect().top < 220) {
          filterItems.forEach( item => {
            if( box.dataset.category == item.dataset.category) { 
              item.classList.add('active')
            } 
            if(box.dataset.category !== item.dataset.category) { 
              item.classList.remove('active')
            } 
          })
        } 
      })        
    }
  }

  if(document.querySelector('.open-vaucher-model') && document.querySelector('#vaucher-model')) {
    const vaucherModel = document.querySelector('#vaucher-model')
    const vaucherBtn = document.querySelector('.open-vaucher-model')
    const closeVaucherModels = document.querySelectorAll('.close-btn')
    const submitVaucher = document.querySelector('#submitVaucher')
    const successfullModel = document.querySelector('#successfull-model')
    const closeSuccessfullModel = document.querySelector('#closeSuccessfullModel')

    if(urlParams.has('show-vaucher')){
      vaucherModel.classList.remove('hidden')
    }

    closeVaucherModels.forEach((cvm) => {
      cvm.addEventListener('click', () => {
        vaucherModel.classList.add('hidden')
        document.body.style.removeProperty('overflow')
        successfullModel.classList.add('hidden')
      })
    })

    submitVaucher.addEventListener('click', () => {
      successfullModel.classList.remove('hidden')
    })

    closeSuccessfullModel.addEventListener('click', () => {
      window.location.assign('/');
    })

    
    vaucherBtn.addEventListener('click', () => {
      vaucherModel.classList.remove('hidden')
      document.body.style.overflow = 'hidden'
    })

    vaucherModel.addEventListener('click', (e) => {
      if(e.target === vaucherModel){
        vaucherModel.classList.add('hidden')
        document.body.style.removeProperty('overflow')
      }
    })
  }


  if(document.querySelector('#membership-section') && document.querySelector('.custom-membership-left-margin')) {
    defineCustomMargin({ domElementIdentify: '.custom-membership-left-margin', left: true })

    window.addEventListener('resize', () => defineCustomMargin({ domElementIdentify: '.custom-membership-left-margin', left: true }))
  }

  if(document.querySelector('#vaucher-section') && document.querySelector('.custom-vaucher-left-margin')) {
    defineCustomMargin({ domElementIdentify: '.custom-vaucher-left-margin', left: true })

    window.addEventListener('resize', () => defineCustomMargin({ domElementIdentify: '.custom-vaucher-left-margin', left: true }))
  }



  function defineCustomMargin({ domElementIdentify, left, right }){
    if(!domElementIdentify) return 
    const domElement = document.querySelector(domElementIdentify)

    const windowWidth = innerWidth
    const containerWidth = document.querySelector('.container').offsetWidth

    const marginValue = (windowWidth - containerWidth) / 2 

    if(left)
      domElement.style.marginLeft = marginValue + 'px'

    if(right)
      domElement.style.marginRight = marginValue + 'px'
  }



  // document.body.addEventListener('onload', init())

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

  //pricing 

  if (document.querySelector('#pricelist-section')) {
    const accordions = document.querySelectorAll('.accordion')
    accordions.forEach((a) => {
      a.addEventListener('click', () => {
        if (a.classList.contains('accordion-opened')) {
          a.classList.remove('accordion-opened')
          return
        }
        
        let useSetTimeout = false

        accordions.forEach((ac) => {
          if (ac.classList.contains('accordion-opened')) {
            ac.classList.remove('accordion-opened')
            useSetTimeout = true
          }
        }) 

        setTimeout(() => {
          a.classList.add('accordion-opened')
          useSetTimeout = false;
        }, useSetTimeout ? 1 : 1)
          
      })
    })
  }


  window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    const header = document.querySelector('#header')
    if (scroll > 80 && !header.classList.contains('active')) {
      header.classList.add('active')
    }
    else if (scroll < 80 ) {
      header.classList.remove('active')
    }
});


  
})()