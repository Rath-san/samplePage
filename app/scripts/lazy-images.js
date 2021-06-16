import { is_cached } from './utils'
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

            if (is_cached(img.dataset.src)) {
              entry.target.classList.add('img-cached')
            }

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

const headerComp = () => {
  const header = document.querySelector('.header')
  const headerImages = Array.from(header.querySelectorAll('img'))

  const imagesresolved = Promise.all(
    headerImages.map(
      (image) =>
        new Promise((res, rej) => {
          image.onload = () => {
            res()
          }
        })
    )
  )

  imagesresolved.then(() => {
    header.classList.add('animated-in')
  })

  headerImages.forEach((img, index) => {
    img.src = img.dataset.src
    img.srcset = img.dataset.srcset
  })
}

headerComp()
