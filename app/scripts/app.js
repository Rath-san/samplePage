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
import './libs/lazy-images'
import { doOnVisible } from './libs/do-on-visible'
// import { animateOnScroll } from './animate-on-scroll'
import './vendor/scroll_to_anchor'
import './libs/prevs'
import 'lite-youtube-embed'
import { Carousel } from 'bootstrap'
// import 'lite-youtube-embed/src/lite-yt-embed.css'
import './vendor/menu'
window.$ = window.jQuery = $
;(() => {
  window.addEventListener('load', () => {
    document.body.classList.add('ready')

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
    const sliderElements = Array.from(
      document.querySelectorAll('.carousel-item__text')
    )

    sliderRoot.addEventListener('slide.bs.carousel', function (e) {
      const from = e.from
      const to = e.to

      sliderElements[from].classList.remove('active')
      sliderElements[to].classList.add('active')
    })

    // prevs
    // const prev = document.querySelectorAll('.prev')

    // prev.forEach(prev => {
    //   prev.addEventListener('mouseenter', function () {
    //     console.log(this)
    //     const img = this.querySelector('img')
    //     img.src = img.src.replace('.jpg', '_.jpg')
    //   })
    //   prev.addEventListener('mouseleave', function () {
    //     const img = this.querySelector('img')
    //     img.src = img.src.replace('_.jpg', '.jpg')
    //   })
    // })

    const headerComp = () => {
      const header = document.querySelector('.header')
      const headerImages = Array.from(header.querySelectorAll('img'))
      const headerVideos = Array.from(header.querySelectorAll('video'))

      const headerComponents = [...headerImages, ...headerVideos]

      console.log(headerComponents)

      // console.log(headerC);

      const componentsResolved = Promise.all(
        headerComponents.map(
          (component) =>
            new Promise((resolve, reject) => {
              if (component.nodeName === 'VIDEO') {
                component.onloadeddata = () => {
                  resolve()
                }
              } else {
                component.onload = () => {
                  resolve()
                }
              }
            })
        )
      )

      componentsResolved
        .then((e) => {
          header.classList.add('animated-in')
        })
        .catch((e) => {
          console.log(e)
        })

      headerComponents.forEach((el, index) => {
        el.src = el.dataset.src
        if (el.dataset.srcset) {
          el.srcset = el.dataset.srcset
        }
      })
    }

    // headerComp()
  })
})()
