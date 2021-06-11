import gsap, { } from 'gsap';

const randomPosition = `random(${0}, ${100}, ${1}, true)`
const randomSize = `random(${50}, ${70}, ${1}, true)`

const size = `${randomSize}% ${randomSize}%`
const position = `${randomPosition}% ${randomPosition}%`

export const HEADER_GRADIENTS = [
  {
    type: 'radial-gradient',
    size,
    position,
    colorPrimary: 'hsla(253, 100%, 50%, 0.122) 0%',
    colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  },{
    type: 'radial-gradient',
    size,
    position,
    colorPrimary: 'hsla(276, 100%, 62%, 0.13) 0%',
    colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  }
]

export const FOOTER_GRADIENTS = [
  {
    type: 'radial-gradient',
    size,
    position: `${randomPosition}% 90%`,
    colorPrimary: 'rgba(124, 35, 175, 0.24) 0%',
    colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  },
  // {
  //   type: 'radial-gradient',
  //   size,
  //   position: `${randomPosition}% 100%`,
  //   colorPrimary: 'rgba(124, 35, 175, 0.24) 0%',
  //   colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  // },
  // {
  //   type: 'radial-gradient',
  //   size,
  //   position: `${randomPosition}% 100%`,
  //   colorPrimary: 'hsla(223, 100%, 50%, 0.1) 0%',
  //   colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  // },
  {
    type: 'radial-gradient',
    size,
    position: `${randomPosition}% 80%`,
    colorPrimary: 'hsla(223, 100%, 50%, 0.1) 0%',
    colorSecondary: 'hsla(0, 0%, 100%, 0) 100%'
  }
]


// // radial-gradient(
// //   100% 50% at 0% 90%,
// //   rgba(124, 35, 175, 0.24) 0%,
// //   hsla(0, 0%, 100%, 0) 100%
// // ),
// // radial-gradient(
// //   100% 50% at 100% 100%,
// //   rgba(124, 35, 175, 0.24) 0%,
// //   hsla(0, 0%, 100%, 0) 100%
// // ),
// radial-gradient(
//   25% 50% at 0% 100%,
//   hsla(223, 100%, 50%, 0.1) 0%,
//   hsla(0, 0%, 100%, 0) 100%
// ),
// radial-gradient(
//   50% 50% at 105% 80%,
//   hsla(223, 100%, 50%, 0.1) 0%,
//   hsla(0, 0%, 100%, 0) 100%
// )

const constructGradient = ({
  type,
  size,
  position,
  colorPrimary,
  colorSecondary
}) => `${type}(${size} at ${position}, ${colorPrimary}, ${colorSecondary})`

export const backgroundAnimation = ({
  selector,
  gradients
}) => {

  const newGradients = gradients.map(g => constructGradient(g))

  gsap.to(selector, {
    backgroundColor: '#030200',
    background: `${newGradients.join(',')}`,
    ease: "power1.inOut",
    duration: 5,
    repeat: -1,
    repeatRefresh: true
  });
}

