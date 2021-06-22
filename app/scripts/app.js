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
import './lazy-images'
// import { animateOnScroll } from './animate-on-scroll'
import './scroll_to_anchor'
import Splitting from 'splitting'

;(() => {
  window.addEventListener('load', () => {
    const titles = Array.from(document.querySelectorAll('.section__title'))
    const subTitles = Array.from(
      document.querySelectorAll('.section__subtitle')
    )
    const displays = Array.from(document.querySelectorAll('.section__display'))

    Array.from(document.querySelectorAll('.section__head')).forEach(
      (tile) => (tile.dataset.visible = false)
    )

    // animateOnScroll({})
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

    const caseItem0Video = document.querySelector('.case__item--0 video')
    const caseItem0VideoSources = caseItem0Video.querySelectorAll('source')
    const videos = [
      `${caseItem0VideoSources[0].src}`,
      `${caseItem0VideoSources[1].src}`
    ]
    let activeVideoIndex = 0
    const showcase = Array.from(document.querySelectorAll('.case__item--0'))

    // switching video on enter
    const switchVideo = () => {
      caseItem0VideoSources[0].src = videos[activeVideoIndex]

      activeVideoIndex += 1

      if (activeVideoIndex >= videos.length) {
        activeVideoIndex = 0
      }
    }

    doOnVisible({
      sectionSelector: showcase,
      cbIn: (target) => {
        caseItem0Video.play()
      },
      cbOut: (target, up) => {
        switchVideo()
        caseItem0Video.load()
        caseItem0Video.pause()
      },
      disconectOnIn: false,
      threshold: 0.5,
      useDirection: true,
      rootMargin: '30%'
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
