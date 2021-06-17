import { TimelineLite, Sine } from 'gsap'

export const notificationsAnim = ({ notificationContainer }) => {
  const mainTL = new TimelineLite({
    paused: true
  })

  const animDuration = 1
  let opacity = 0.6
  const tileObject = document.querySelectorAll(
    `${notificationContainer} .notification__item`
  )

  Array.from(tileObject).forEach((tile, index) => {
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
        ease: 'back.out(2)',
        duration: animDuration / 1.75
      },
      0
    )

    opacity += 0.2
    mainTL.add(tl)
  })

  return mainTL
}
