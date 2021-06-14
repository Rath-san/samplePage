import { TimelineLite, Sine } from 'gsap'

export const notificationsAnim = ({ notificationContainer }) => {
  const mainTL = new TimelineLite({
    paused: true
  })

  const animDuration = 1
  let opacity = 1
  const tileObject = document.querySelectorAll(
    `${notificationContainer} .notification__item`
  )

  Array.from(tileObject).reverse().forEach((tile, index) => {
    const tl = new TimelineLite({
      // repeat: -1,
      // yoyo: true
    })

    tl.fromTo(
      tile,
      {
        x: 180
      },
      {
        opacity,
        x: 0,
        ease: Sine.easeInOut,
        duration: animDuration / 3
      },
      0
    )

    opacity -= 0.2
    mainTL.add(tl)
  })

  return mainTL
}
