import { isCached } from './utils'
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

            if (isCached(img.dataset.src)) {
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
  const headerVideos = Array.from(header.querySelectorAll('video'))

  const headerComponents = [...headerImages, ...headerVideos]

  const componentsResolved = Promise.all(
    headerComponents.map(
      (component) =>
        new Promise((resolve, reject) => {
          if (component.nodeName === 'VIDEO') {
            component.onloadeddata = () => {
              resolve()
            }
          } else {
            component.onload = () => {
              resolve()
            }
          }
        })
    )
  )

  componentsResolved
    .then((e) => {
      header.classList.add('animated-in')
    })
    .catch((e) => {
      console.log(e)
    })

  headerComponents.forEach((el, index) => {
    el.src = el.dataset.src
    if (el.srcset) {
      el.srcset = el.dataset.srcset
    }
  })
}

headerComp()
