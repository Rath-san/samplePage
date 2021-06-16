import gsap, { TimelineLite, Sine } from 'gsap'

gsap.config({
  force3D: true
})

export const animateTiles = ({ tilesContainer, initialTransforms, order }) => {
  const tilesWrappers = Array.from(document.querySelectorAll(
    `${tilesContainer} .tile__wrapper`
  ))

  tilesWrappers.forEach((item, index) => {
    gsap.set(item, initialTransforms[index].initialPosition)
  })

  const mainTL = new TimelineLite({
    paused: true
  })

  const animDuration = 1.5

  if (order === -1) {
    tilesWrappers.reverse()
  }

  tilesWrappers.forEach((tile, index) => {
    const tl = new TimelineLite({
      // repeat: -1,
      // yoyo: true
    })

    const transformations = initialTransforms[index].transformations
    const tileMesh = tile.querySelector('.mesh')
    const tileShadow = tile.querySelector('.shadow')

    if (tileMesh) {
      tl.fromTo(
        tileMesh,
        {
          ...transformations.mesh.from,
          opacity: 0
        },
        {
          ...transformations.mesh.to,
          opacity: 1,
          duration: animDuration,
          ease: Sine.easeInOut
        },
        0
      )
    }

    if (tileShadow) {
      tl.fromTo(
        tileShadow,
        {
          opacity: 0
        },
        {
          opacity: 0.5,
          duration: animDuration,
          ease: Sine.easeInOut
        },
        '-=.5'
      )
    }

    mainTL.add(tl, `-=${1.9}`)
  })

  return mainTL
}
