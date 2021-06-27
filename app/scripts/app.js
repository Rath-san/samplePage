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
// import Splitting from 'splitting'
;(() => {
  window.addEventListener('load', () => {

    // CAROUSEL

    // get slider
    // get slider change time
    // render progres based on slider timeout %
    const slider = $('#carouselExamples')

    slider.on('slid.bs.carousel', () => {
      console.log('next');
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

    // switching movie section
    // const videos = Array.from(document.querySelectorAll('.case__item--0 video'))
    // const showcase = Array.from(document.querySelectorAll('.case__item--0'))
    // let activeVideo = videos[0]
    // let playing = false

    // videos[0].classList.add('active')
    // videos[0].onended = function () {
    //   videos[1].classList.add('active')
    //   this.currentTime = 0
    //   activeVideo = videos[1]
    //   playing = false
    // }

    // videos[1].onended = function () {
    //   this.classList.remove('active')
    //   this.currentTime = 0
    //   activeVideo = videos[0]
    //   playing = false
    // }

    // doOnVisible({
    //   sectionSelector: showcase,
    //   cbIn: (target) => {
    //     if (!playing) {
    //       activeVideo.play()
    //       playing = true
    //     }
    //   },
    //   cbOut: (target, up) => {
    //     // switchVideo()
    //   },
    //   disconectOnIn: false,
    //   threshold: 0.5,
    //   useDirection: true,
    //   rootMargin: '30%'
    // })

    setTimeout(() => {
      document.body.classList.add('ready')
    }, 200)

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
