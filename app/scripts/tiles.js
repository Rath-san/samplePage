import gsap, { TimelineLite, Sine } from 'gsap'

gsap.config({
  force3D: true
})

export const animateTiles = ({ tilesContainer, initialTransforms, order = 'reversed' }) => {
  const tilesWrappers = document.querySelectorAll(
    `${tilesContainer} .tile__wrapper`
  )

  tilesWrappers.forEach((item, index) => {
    gsap.set(item, initialTransforms[index].initialPosition)
  })

  const mainTL = new TimelineLite({
    paused: true
  })

  const animDuration = 1
  const tileObject = Array.from(document.querySelectorAll(`${tilesContainer} .tile`))

  if (order === 'reversed') {
    tileObject.reverse()
  }

  tileObject.forEach((tile, index) => {
    const tl = new TimelineLite({
      // repeat: -1,
      // yoyo: true,
    })

    const transformations = initialTransforms[index].transformations

    const tileMesh = tile.querySelector('.tile__mesh')
    const tileShadow = tile.querySelector('.tile__shadow')
    tl.fromTo(
      tile,
      transformations.tile.from,
      { ...transformations.tile.to, duration: animDuration / 4 },
      0
    )

    if (tileMesh) {
      tl.fromTo(
        tileMesh,
        transformations.mesh.from,
        {
          ...transformations.mesh.to,
          duration: animDuration / 1.5,
          ease: Sine.easeInOut
        },
        0
      )
    }

    if (tileShadow) {
      tl.fromTo(
        tileShadow,
        transformations.shadow.from,
        {
          ...transformations.shadow.to,
          duration: animDuration / 1.5,
          ease: Sine.easeInOut
        },
        0
      )
    }

    mainTL.add(tl, `-=${0.5}`)
  })

  return mainTL
}
