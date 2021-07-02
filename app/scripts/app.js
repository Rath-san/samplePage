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
// import './scroll_to_anchor'
// import Splitting from 'splitting'
;(() => {
  window.addEventListener('load', () => {

    // managing deco elements
    const deco = Array.from(document.querySelectorAll('.deco'))
    
    const addDecoInner = (el) => {
      const span = document.createElement('span')
      span.classList.add('deco-inner')
      el.appendChild(span)
    }

    deco.forEach(el => {
      addDecoInner(el)
    })
    


    // const titles = Array.from(document.querySelectorAll('.section__title'))
    // const subTitles = Array.from(
    //   document.querySelectorAll('.section__subtitle')
    // )
    // const displays = Array.from(document.querySelectorAll('.section__display'))

    // Array.from(document.querySelectorAll('.section__head')).forEach(
    //   (tile) => (tile.dataset.visible = false)
    // )

    // animateOnScroll({})
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

    // visible sections
    const sections = Array.from(document.querySelectorAll('.section__head'))
    doOnVisible({
      sectionSelector: sections
    })

    Array.from(document.querySelectorAll('.btn-collapse')).forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', !expanded)
        $(btn.dataset.target).collapse('toggle')
      })
    })

    // slider
    // slider({
    //   node: document.getElementById('slider')
    // })
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
            entry.target.dataset.visible = true
            cbIn(target, up)
            if (disconectOnIn) observer.disconnect()
          } else {
            entry.target.dataset.visible = false
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
