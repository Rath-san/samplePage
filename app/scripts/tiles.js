import gsap, { TimelineLite } from 'gsap';

gsap.config({
  force3D: true,
});

export const animateTiles = ({ tilesContainer, initialTransforms }) => {

  const tilesWrappers = document.querySelectorAll(
    `${tilesContainer} .tile__wrapper`
  );

  tilesWrappers.forEach((item, index) => {
    gsap.set(item, initialTransforms[index].initialPosition);
  });

  const mainTL = new TimelineLite({
    paused: true,
  });

  const animDuration = 1;
  const tileObject = document.querySelectorAll(`${tilesContainer} .tile`);

  tileObject.forEach((tile, index) => {
    const tl = new TimelineLite({
      // repeat: -1,
      // yoyo: true,
    });

    const transformations = initialTransforms[index].transformations

    const tileMesh = tile.querySelector(".tile__mesh");
    const tileShadow = tile.querySelector(".tile__shadow");
    tl.fromTo(
      tile,
      transformations.tile.from,
      {...transformations.tile.to, duration: animDuration / 4 },
      0
    )
      .fromTo(
        tileMesh,
        transformations.mesh.from,
        {...transformations.mesh.to, duration: animDuration / 1.5 },
        0
      )
      .fromTo(
        tileShadow,
        transformations.shadow.from,
        {...transformations.shadow.to, duration: animDuration / 1.5 },
        0
      );

    mainTL.add(tl, `-=${.5}`);
  });

  return mainTL
};