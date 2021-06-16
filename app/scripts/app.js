import 'intersection-observer'
import { lazyAnimations } from './lazy-animation'

import { progressAnim } from './progress-bar'

import { paralax } from './paralax'
import { glowingBinaryMatrix } from './binary-matrix'
import { animateTiles } from './tiles'
import { INITIAL_TRANSFORMS } from './tiles-config'
import { detectOs, OSs } from './device-detection'
import {
  backgroundAnimation,
  HEADER_GRADIENTS,
  FOOTER_GRADIENTS
} from './background-animation'
import { notificationsAnim } from './notifications'
import './lazy-images'
;(() => {
  window.addEventListener('load', () => {
    const gradientAnimations = [
      {
        section: '.header__bg',
        animations: HEADER_GRADIENTS
      },
      {
        section: '.footer',
        animations: FOOTER_GRADIENTS
      }
    ]

    gradientAnimations.forEach(({ section, animations }) => {
      const selector = document.querySelector(section)
      const animation = backgroundAnimation({
        selector,
        gradients: animations
      })

      const cbIn = () => animation.play()
      const cbOut = () => animation.pause()

      doOnVisible({
        sectionSelector: [selector],
        cbIn,
        cbOut,
        threshold: 0.7
      })
    })

    lazyAnimations({
      selector: document.querySelectorAll('.animated')
    })

    // handling OS specific modification
    const os = detectOs()
    const osSpecificButtons = {
      windows: document.querySelectorAll(`[data-os=${OSs.Windows}]`),
      mac: document.querySelectorAll(`[data-os=${OSs.MacOS}]`)
    }

    if (os === OSs.MacOS) {
      osSpecificButtons.windows.forEach((btn) => {
        btn.style.display = 'none'
      })
    } else if (os === OSs.Windows) {
      osSpecificButtons.mac.forEach((btn) => {
        btn.style.display = 'none'
      })
      osSpecificButtons.windows.forEach(btn => {
        btn.classList.replace('btn__outline--light', 'btn__fill--primary')
      })
    }

    const tileSections = [
      {
        section: 'products',
        sectionClass: '.purchases__image--products',
        order: -1
      },
      {
        section: 'projects',
        sectionClass: '.purchases__image--projects'
      },
      {
        section: 'manage',
        sectionClass: '.manage__comp'
      }
    ]

    const tileTimelines = tileSections.map((tso) => {
      const tileAnim = animateTiles({
        tilesContainer: tso.sectionClass,
        initialTransforms: INITIAL_TRANSFORMS[tso.section],
        order: tso.order
      })

      return tileAnim
    })

    const animatedTileSections = [
      {
        class: '.purchases',
        tileSectionsIndex: [0, 1]
      },
      {
        class: '.manage__content',
        tileSectionsIndex: [2]
      }
    ]

    animatedTileSections.forEach((s) => {
      const cbIn = () => {
        s.tileSectionsIndex.forEach((tlIndex) => {
          tileTimelines[tlIndex].play()
        })
      }

      doOnVisible({
        sectionSelector: [document.querySelector(s.class)],
        cbIn,
        cbOut: () => {},
        threshold: 0.5
      })
    })

    const notificationSectionAnim = notificationsAnim({
      notificationContainer: '.notifications'
    })

    const playNotifAnim = () => {
      notificationSectionAnim.play()
    }

    doOnVisible({
      sectionSelector: [document.querySelector('.notifications')],
      cbIn: playNotifAnim,
      cbOut: () => {},
      threshold: 0.7
    })

    // update section
    const paralaxSelector = document.querySelector('.update__bg__items')
    const mouseContainer = document.querySelector('section.update')

    paralax({
      selector: paralaxSelector,
      mouseContainer,
      offsetMultiplierX: 2000,
      offsetMultiplierY: 500
    })

    const gbmSelector = document.querySelector('#glowingBinaryMatrix')

    // binary matrix
    glowingBinaryMatrix({
      canvas: gbmSelector,
      fontSize: 20,
      textColor: 'rgba(70,252,232, 1)',
      bgColor: '#00000005',
      speed: 100,
      text: '01101101 01001001 01101110 01110011 01110100 01100001 01101100 01101100 01100101 01110010'
    })

    const progressBarAnim = progressAnim({
      selector: '.progress__bar'
    })

    const playProgressBarAnim = () => progressBarAnim.play()

    doOnVisible({
      sectionSelector: [document.querySelector('.update__progress')],
      cbIn: playProgressBarAnim,
      cbOut: () => {},
      threshold: 0.5
    })
  })
})()

const doOnVisible = ({
  sectionSelector,
  cbIn = () => {},
  cbOut = () => {},
  threshold = 0,
  disconectOnIn = true
}) => {
  const lazyAnimate = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cbIn()
            if (disconectOnIn) observer.disconnect()
          } else {
            cbOut()
          }
        })
      },
      {
        threshold
      }
    )

    io.POLL_INTERVAL = 100
    io.USE_MUTATION_OBSERVER = false

    io.observe(target)
  }

  sectionSelector.forEach(lazyAnimate)
}
