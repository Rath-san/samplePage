// import 'intersection-observer'
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
// import './lazy-images'
// import { animateOnScroll } from './animate-on-scroll'
import './scroll_to_anchor'
import Splitting from 'splitting'
;(() => {
  window.addEventListener('load', () => {
    const titles = Array.from(document.querySelectorAll('.section__title'))
    const subTitles = Array.from(document.querySelectorAll('.section__subtitle'))
    const displays = Array.from(document.querySelectorAll('.section__display'))
    const texts = Array.from(document.querySelectorAll('.section__text'))

    Array.from(document.querySelectorAll('.section__head')).forEach((tile) => (tile.dataset.visible = false))

    // animateOnScroll({})
    Splitting({
      target: [...titles, ...subTitles, ...texts],
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

    const caseItem0Video = document.querySelector('.case__item--0 video')
    const caseItem0VideoSources = caseItem0Video.querySelectorAll('source')
    const video1 = `${caseItem0VideoSources[0].src}`
    const video2 = `${caseItem0VideoSources[1].src}`
    const showcase = Array.from(document.querySelectorAll('.case__item--0'))

    // switching video on enter
    const switchVideo = (newVid) => {
      caseItem0VideoSources[0].src = newVid

      caseItem0Video.load()
      caseItem0Video.play()
    }

    doOnVisible({
      sectionSelector: showcase,
      cbIn: (target, up) => {
        if (up) {
          switchVideo(video1)
        } else {
          switchVideo(video2)
        }
      },
      cbOut: () => {},
      disconectOnIn: false,
      threshold: 0.5,
      useDirection: true,
      rootMargin: '1000px'
    })
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
          if (entry.isIntersecting) {
            if (useDirection) {
              let y = entry.boundingClientRect.y
              const up =
                lastTriggerPosition !== undefined
                  ? lastTriggerPosition > y
                  : true
              lastTriggerPosition = y
              cbIn(target, up)
            } else {
              cbIn(target)
            }
            if (disconectOnIn) observer.disconnect()
          } else {
            cbOut(target)
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
