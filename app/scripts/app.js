import { paralax } from './paralax';
import { glowingBinaryMatrix } from './binary-matrix'

;(() => {
  window.addEventListener('load', () => {

    // update section
    const paralaxSelector = document.querySelector('.update__bg__items')
    const mouseContainer = document.querySelector('section.update')

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
