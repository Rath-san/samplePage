import 'intersection-observer'
// import { lazyAnimations } from './lazy-animation'

// import { progressAnim } from './progress-bar'

// import { paralax } from './paralax'
// import { glowingBinaryMatrix } from './binary-matrix'
// import { animateTiles } from './tiles'
// import { INITIAL_TRANSFORMS } from './tiles-config'
// import { detectOs, OSs } from './device-detection'
// import {
//   backgroundAnimation,
//   HEADER_GRADIENTS,
//   FOOTER_GRADIENTS
// } from './background-animation'
// import { notificationsAnim } from './notifications'
import { Carousel } from 'bootstrap'
import './libs/lazy-images'
import { doOnVisible } from './libs/do-on-visible'
// import { animateOnScroll } from './animate-on-scroll'
import './vendor/scroll_to_anchor'
// import 'lite-youtube-embed'
// import 'lite-youtube-embed/src/lite-yt-embed.css'
// import './vendor/menu'
// import Splitting from 'splitting'
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
    // // animate logo

    // grab logo
    // const logo = document.querySelector('.svg-logo')
    // split by elements
    // const elements = Array.from(logo.querySelectorAll('g > *'))
    // add offset to element
    // elements.forEach((el, index) => {
    //   el.style = `
    //     --path-index: ${index};
    //   `
    // })

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }

    // const showTextOnSlide
    // const hideTextOnSlide = ()

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

    // console.log(slider.next());

    // console.log(slider);
    // const sliderTitles = Array.from(
    //   document.querySelectorAll(
    //     '#carouselExamples .carousel__titles .carousel-title'
    //   )
    // )
    // const sliderContents = Array.from(
    //   document.querySelectorAll(
    //     '#carouselExamples .carousel__contents .carousel-title'
    //   )
    // )

    // const sliderElements = [...sliderTitles, ...sliderContents]

    // slider.on('slide.bs.carousel', function (e) {
    //   // console.log(e.to)
    //   sliderElements.forEach((i) => i.classList.remove('out'))

    //   sliderContents[e.from].classList.add('out')
    //   sliderContents[e.from].classList.remove('active')
    //   sliderContents[e.to].classList.add('active')

    //   sliderTitles[e.from].classList.add('out')
    //   sliderTitles[e.from].classList.remove('active')
    //   sliderTitles[e.to].classList.add('active')
    // })

    // const sliderOptionsCon = {
    //   interval: 1,
    //   keyboard: true,
    //   ride: 'carousel',
    //   pause: false
    // }

    // const sliderContinuous = $('#carouselContinuous').carousel(sliderOptionsCon)

    // $('#carouselContinuous .carousel-item').each(function () {
    //   var minPerSlide = 4
    //   var next = $(this).next()
    //   if (!next.length) {
    //     next = $(this).siblings(':first')
    //   }
    //   next.children(':first-child').clone().appendTo($(this))

    //   for (var i = 0; i < minPerSlide; i++) {
    //     next = next.next()
    //     if (!next.length) {
    //       next = $(this).siblings(':first')
    //     }

    //     next.children(':first-child').clone().appendTo($(this))
    //   }
    // })
    // // carousel-item", "active", "carousel-item-left", value: "carousel-item active carousel-item-left"
    // window.addEventListener('resize', () => {
    //   $('#carouselContinuous').carousel('next')
    // })
    // const sliderProgress = $('.carousel-progress')

    // const sliderProgressStart = () =>
    //   sliderProgress.css({
    //     transform: `scaleX(1)`,
    //     transition: `transform ${sliderOptions.interval}ms ease-in-out`
    //   })

    // const sliderProgressReset = () =>
    //   sliderProgress.css({
    //     transform: `scaleX(0)`,
    //     transition: 'none'
    //   })

    // slider.on('slide.bs.carousel', () => {
    //   sliderProgressStart()
    //   setTimeout(() => {
    //     sliderProgressReset()
    //   }, sliderOptions.interval)
    // })

    // setTimeout(() => {
    //   document.body.classList.add('ready')
    // }, 200)

    // // text splitting
    // const titles = Array.from(document.querySelectorAll('.section__title'))
    // const subTitles = Array.from(
    //   document.querySelectorAll('.section__subtitle')
    // )
    // const displays = Array.from(document.querySelectorAll('.section__display'))

    // Splitting({
    //   target: [...titles, ...subTitles],
    //   by: 'words'
    // })

    // Splitting({
    //   target: displays
    // })

    // const cbIn = (target) => {
    //   target.closest('.section__head').dataset.visible = true
    // }

    // const cbOut = (target) => {
    //   target.closest('.section__head').dataset.visible = false
    // }

    // doOnVisible({
    //   sectionSelector: titles,
    //   cbIn,
    //   cbOut,
    //   disconectOnIn: false,
    //   threshold: 1
    // })

    // // collapsible btn
    // Array.from(document.querySelectorAll('.btn-collapse')).forEach((btn, i) => {
    //   btn.addEventListener('click', () => {
    //     const expanded = btn.getAttribute('aria-expanded') === 'true'
    //     btn.setAttribute('aria-expanded', !expanded)
    //     $(btn.dataset.target).collapse('toggle')
    //   })
    // })

    // const headerComp = () => {
    //   const header = document.querySelector('.header')
    //   const headerImages = Array.from(header.querySelectorAll('img'))
    //   const headerVideos = Array.from(header.querySelectorAll('video'))

    //   const headerComponents = [...headerImages, ...headerVideos]

    //   const componentsResolved = Promise.all(
    //     headerComponents.map(
    //       (component) =>
    //         new Promise((resolve, reject) => {
    //           if (component.nodeName === 'VIDEO') {
    //             component.onloadeddata = () => {
    //               resolve()
    //             }
    //           } else {
    //             component.onload = () => {
    //               resolve()
    //             }
    //           }
    //         })
    //     )
    //   )

    //   componentsResolved
    //     .then((e) => {
    //       header.classList.add('animated-in')
    //     })
    //     .catch((e) => {
    //       console.log(e)
    //     })

    //   headerComponents.forEach((el, index) => {
    //     el.src = el.dataset.src
    //     if (el.dataset.srcset) {
    //       el.srcset = el.dataset.srcset
    //     }
    //   })
    // }

    // headerComp()
  })
})()
