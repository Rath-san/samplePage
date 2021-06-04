import { paralax } from './paralax';
import { glowingBinaryMatrix } from './binary-matrix'
import { 
  cards,
  // CARDS_TRANSFORMATION_DATA
} from './cards'
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

    // update section
    const paralaxSelector = document.querySelector('.update__bg__items')
    const mouseContainer = document.querySelector('section.update')

    const cardsPurchasesScene = document.querySelector('.purchases .scene-3d')

    // cards(cardsPurchasesScene, CARDS_TRANSFORMATION_DATA.PURCHASES)

    console.log(cardsPurchasesScene);

    paralax({
      selector: paralaxSelector,
      mouseContainer,
      offsetMultiplierX: 1000,
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
