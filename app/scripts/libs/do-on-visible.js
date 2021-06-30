export const doOnVisible = ({
  sectionSelector,
  cbIn = () => {},
  cbOut = () => {},
  threshold = 0,
  disconectOnIn = false,
  useDirection = false,
  rootMargin = '0px'
}) => {
  let lastTriggerPosition

  const lazyAnimate = (target) => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          let y = entry.boundingClientRect.y
          const up =
            lastTriggerPosition !== undefined ? lastTriggerPosition > y : true
          lastTriggerPosition = y

          if (entry.isIntersecting) {
            cbIn(target, up)
            if (disconectOnIn) observer.disconnect()
          } else {
            cbOut(target, up)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    io.POLL_INTERVAL = 100
    io.USE_MUTATION_OBSERVER = false

    io.observe(target)
  }

  sectionSelector.forEach(lazyAnimate)
}
