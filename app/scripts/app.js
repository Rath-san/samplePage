import { slider } from './slider'
import { header } from './header'
;(() => {
  window.addEventListener('load', () => {
    header()
    slider()
    document.body.classList.remove('loader--active')
  })
})()
