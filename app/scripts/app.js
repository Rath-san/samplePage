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
import './lazy-images'
// import { animateOnScroll } from './animate-on-scroll'
import './scroll_to_anchor'
import Splitting from 'splitting'
;(() => {
  window.addEventListener('load', () => {
    // animate logo

    // grab logo
    const logo = document.querySelector('.svg-logo')
    // split by elements
    const elements = Array.from(logo.querySelectorAll('g > *'))
    // add offset to element
    elements.forEach((el, index) => {
      el.style = `
        --path-index: ${index};
      `
    })

    const sliderOptions = {
      interval: 5000,
      keyboard: true,
      ride: 'carousel',
      pause: false
    }

    const slider = $('#carouselExamples').carousel(sliderOptions)
    const sliderProgress = $('.carousel-progress')

    const sliderProgressStart = () =>
      sliderProgress.css({
        transform: `scaleX(1)`,
        transition: `transform ${sliderOptions.interval}ms ease-in-out`
      })

    const sliderProgressReset = () =>
      sliderProgress.css({
        transform: `scaleX(0)`,
        transition: 'none'
      })

    slider.on('slide.bs.carousel', () => {
      sliderProgressStart()
      setTimeout(() => {
        sliderProgressReset()
      }, sliderOptions.interval)
    })

    setTimeout(() => {
      document.body.classList.add('ready')
    }, 200)

    // text splitting
    const titles = Array.from(document.querySelectorAll('.section__title'))
    const subTitles = Array.from(
      document.querySelectorAll('.section__subtitle')
    )
    const displays = Array.from(document.querySelectorAll('.section__display'))

    Splitting({
      target: [...titles, ...subTitles],
      by: 'words'
    })

    Splitting({
      target: displays
    })

    const cbIn = (target) => {
      target.closest('.section__head').dataset.visible = true
    }

    const cbOut = (target) => {
      target.closest('.section__head').dataset.visible = false
    }

    doOnVisible({
      sectionSelector: titles,
      cbIn,
      cbOut,
      disconectOnIn: false,
      threshold: 1
    })

    // collapsible btn
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

const doOnVisible = ({
  sectionSelector,
  cbIn = () => {},
  cbOut = () => {},
  threshold = 0,
  disconectOnIn = false,
  useDirection = false,
  rootMargin = '0px'
}) => {
  let lastTriggerPosition

  const lazyAnimate = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          let y = entry.boundingClientRect.y
          const up =
            lastTriggerPosition !== undefined ? lastTriggerPosition > y : true
          lastTriggerPosition = y

          if (entry.isIntersecting) {
            cbIn(target, up)
            if (disconectOnIn) observer.disconnect()
          } else {
            cbOut(target, up)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    io.POLL_INTERVAL = 100
    io.USE_MUTATION_OBSERVER = false

    io.observe(target)
  }

  sectionSelector.forEach(lazyAnimate)
}
