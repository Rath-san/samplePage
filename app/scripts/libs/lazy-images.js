import { isCached } from '../utils/utils'
;(() => {
  // Lazy images
  const images = document.querySelectorAll('.img-lazy')

  const lazyLoad = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector('img')
            const placeholder = entry.target.querySelector('.placeholder')

            // if (isCached(img.dataset.src)) {
            //   entry.target.classList.add('img-cached')
            // }

            img.onload = () => {
              img.style.opacity = 1
              placeholder.style.opacity = 0
            }

            img.src = img.dataset.src
            img.srcset = img.dataset.srcset

            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100%'
      }
    )

    io.observe(target)
  }

  images.forEach(lazyLoad)
})()

