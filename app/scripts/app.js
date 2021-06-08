import { paralax } from './paralax';
import { glowingBinaryMatrix } from './binary-matrix'
import {
  animateTiles
} from './tiles'
import { INITIAL_TRANSFORMS } from './tiles-config'
import { detectOs, OSs } from './device-detection'

;(() => {
  window.addEventListener('load', () => {

    // handling OS specific modification
    const os = detectOs();
    const osSpecificButtons = {
      windows: document.querySelectorAll(`[data-os=${OSs.Windows}]`),
      mac: document.querySelectorAll(`[data-os=${OSs.MacOS}]`)
    }

    if (os === OSs.MacOS) {
      osSpecificButtons.windows.forEach(btn => {
        btn.style.display = 'none'
      })
    } else if (os === OSs.Windows) {
      osSpecificButtons.mac.forEach(btn => {
        btn.style.display = 'none'
      })
    }

    const tileSections = [
      {
        section: 'products',
        sectionClass: '.purchases__image--products',
      },
      {
        section: 'projects',
        sectionClass: '.purchases__image--projects',
      },
      {
        section: 'manage',
        sectionClass: '.manage__comp',
      }
    ]

    tileSections.map(tso => {
      const tileAnim = animateTiles({
        tilesContainer: tso.sectionClass,
        initialTransforms: INITIAL_TRANSFORMS[tso.section]
      })
      tileAnim.play()
      return tileAnim
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
  })
})()
