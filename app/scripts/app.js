import 'intersection-observer'
// import { paralax } from './libs/paralax'
import { Carousel } from 'bootstrap'
import './libs/lazy-images'
import { doOnVisible } from './libs/do-on-visible'
import './vendor/scroll_to_anchor'
;(() => {
  window.addEventListener('load', () => {
    const sections = Array.from(document.querySelectorAll('section'))
    sections.forEach((s) => {
      s.dataset.visible = false
    })

    doOnVisible({
      sectionSelector: sections,
      cbIn: (target) => {
        target.dataset.visible = true
      },
      cbOut: (target) => {
        target.dataset.visible = false
      }
    })

    const sliderRoot = document.querySelector('#carouselSection')
    const slider = Carousel.getInstance(sliderRoot)
    const sliderElements = Array.from(
      document.querySelectorAll('.carousel-item__text')
    )

    sliderRoot.addEventListener('slide.bs.carousel', function (e) {
      const from = e.from
      const to = e.to

      sliderElements[from].classList.remove('active')
      sliderElements[to].classList.add('active')
    })

    const baubles = document.querySelectorAll('.bauble')
    // console.log(baubles)
    Array.from(baubles).forEach((e) => {
      e.addEventListener('transitionend', () => {
        // console.log('transition ended')
        e.classList.add('idle')
      })
    })

    // PARALAX
    // paralax({
    //   selector: document.querySelector('.baubles'),
    //   mouseContainer: document.querySelector('.section--baubles'),
    //   offsetMultiplierX: 200,
    //   offsetMultiplierY: 50
    // })
  })
})()
