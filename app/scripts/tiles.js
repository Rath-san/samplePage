import gsap, { TimelineLite } from 'gsap';

export const INITIAL_TRANSFORMS = {
  products: [
    { x: 0, y: 0 },
    { x: "43%", y: "63%" },
    { x: "-48%", y: "79%", zIndex: 1 },
    { x: "-90%", y: "10%" },

    { x: "-41%", y: "-66%", zIndex: -1 },
    { x: "56%", y: "-64%", zIndex: -1 },
    { x: "96%", y: "40%" },
    { x: "110%", y: "-26%" },
  ],
  projects: [
    { x: 0, y: 0 },
    { x: "33%", y: "-57%" },
  ],
  manage: [
    { x: 0, y: 0, zIndex: 1 },
    { x: "100%", y: "9%", zIndex: 1 },
    { x: "44%", y: "70%" },
    { x: "79%", y: "112%", zIndex: 1 },
    { x: "142%", y: "71%" },
  ],
};

gsap.config({
  force3D: true,
});

export const animateTiles = ({ tilesContainer, initialTransforms }) => {
  const tilesWrappers = document.querySelectorAll(
    `${tilesContainer} .tile__wrapper`
  );
  tilesWrappers.forEach((item, index) => {
    gsap.set(item, initialTransforms[index]);
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

    const tileMesh = tile.querySelector(".tile__mesh");
    const tileShadow = tile.querySelector(".tile__shadow");
    tl.fromTo(
      tile,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: animDuration / 4,
      },
      0
    )
      .fromTo(
        tileMesh,
        {
          y: 0,
        },
        {
          y: -50,
          duration: animDuration / 1.5,
        },
        0
      )
      .fromTo(
        tileShadow,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: animDuration / 1.5,
        },
        0
      );

    mainTL.add(tl, `-=0.35`);
  });

  return mainTL
};