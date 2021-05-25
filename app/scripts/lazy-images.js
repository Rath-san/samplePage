;(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-lazy')
    images.forEach((image) => {

      const img = image.querySelector('img')
      const placeholder = image.querySelector('.placeholder')

      img.onload = () => {
        img.style.opacity = 1
        placeholder.style.opacity = 0;
      }
      img.src = img.dataset.src
      img.srcset = img.dataset.srcset
    })
  })
})()
