// import { slider } from './slider'

// import { header } from './header'
;(() => {

  
  window.addEventListener('DOMContentLoaded', () => {
    console.log('image');
    document.querySelectorAll('img').forEach(image => {
      // image.style.willChange = `opacity`;
      // image.style.transition = `opacity 1s`;
      image.onload = () => {
        image.style.opacity = 1
      }

      image.src = image.dataset.src;
      image.srcset = image.dataset.srcset;

      console.log('image loaded');

    })
    // header()
    // slider()
  })
})()
