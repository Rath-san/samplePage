import 'intersection-observer'
import { lazyAnimations } from './lazy-animation'

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
;(() => {
  window.addEventListener('load', () => {
    backgroundAnimation({
      selector: document.querySelector('.header__bg'),
      gradients: HEADER_GRADIENTS
    })

    backgroundAnimation({
      selector: document.querySelector('.footer'),
      gradients: FOOTER_GRADIENTS
    })

    lazyAnimations({
      selector: document.querySelectorAll('.animated')
    })

    // backgroundAnimation({
    //   selector: document.querySelector('.header'),
    //   gradients: HEADER_GRADIENTS
    // })

    // backgroundAnimation({
    //   selector: document.querySelector('.footer'),
    //   gradients: FOOTER_GRADIENTS
    // })

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
    }

    const tileSections = [
      {
        section: 'products',
        sectionClass: '.purchases__image--products'
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
        initialTransforms: INITIAL_TRANSFORMS[tso.section]
      })
      return tileAnim
    })

    // DEBUG
    // tileSections.forEach((section, index) => {
    //   const sectionClass = `${section.sectionClass}`

    //   const tileSection = document.querySelector(sectionClass)

    //   tileSection.addEventListener('mouseenter', () => {
    //     tileTimelines[index].reverse()
    //     // console.log(tileTimelines[index]);
    //   })

    //   tileSection.addEventListener('mouseleave', () => {
    //     tileTimelines[index].play()
    //     // console.log(tileTimelines[index]);
    //   })
    // })
    // END DEBUG

    const animatedTileSections = [
      {
        class: '.purchases',
        tileSectionsIndex: [0, 1]
      },
      {
        class: '.manage',
        tileSectionsIndex: [2]
      }
    ]

    animatedTileSections.forEach((s) => {
      const cbIn = () => {
        s.tileSectionsIndex.forEach((tlIndex) => {
          tileTimelines[tlIndex].play()
        })
      }
      const cbOut = () => {
        s.tileSectionsIndex.forEach((tlIndex) => {
          tileTimelines[tlIndex].reverse()
        })
      }

      doOnVisible({
        sectionSelector: [document.querySelector(s.class)],
        cbIn,
        cbOut,
        threshold: 0.4
      })
    })

    // play when visible
    // reverse when leawing

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
  })
})()

const doOnVisible = ({
  sectionSelector,
  cbIn = () => {},
  cbOut = () => {},
  threshold = 0
}) => {
  const lazyAnimate = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cbIn()
            // observer.disconnect()
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
