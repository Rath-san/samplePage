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
// import { doOnVisible } from './libs/do-on-visible'
// import { animateOnScroll } from './animate-on-scroll'
import './vendor/scroll_to_anchor'
import 'lite-youtube-embed'
// import 'lite-youtube-embed/src/lite-yt-embed.css'
// import './vendor/menu'
// import Splitting from 'splitting'
import 'slick-carousel'
import $ from 'jquery'
window.$ = window.jQuery = $

;(() => {
  window.addEventListener('load', () => {
    // carousel
    // $('.slick-carousel').slick({
    //   // setting-name: setting-value
    //   infinite: false,
    //   dots: false,
    //   arrows: false,
    //   // slidesToShow: 1,
    //   // centerMode: true,
    //   variableWidth: true
    // })

    // // collapsible btn
    Array.from(document.querySelectorAll('.btn-collapse')).forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', !expanded)
        $(btn.dataset.target).collapse('toggle')
      })
    })

    const headerComp = () => {
      const header = document.querySelector('.header')
      const headerImages = Array.from(header.querySelectorAll('img'))
      const headerVideos = Array.from(header.querySelectorAll('video'))

      const headerComponents = [...headerImages, ...headerVideos]

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

    headerComp()
  })
})()
