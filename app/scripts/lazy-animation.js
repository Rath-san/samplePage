export const lazyAnimations = ({ selector }) => {
  const animatedSections = document.querySelectorAll('.animated')

  const lazyAnimate = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated-in')

            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.01,
        rootMargin: '90%'
      }
    )

    io.observe(target)
  }

  animatedSections.forEach(lazyAnimate)
}
