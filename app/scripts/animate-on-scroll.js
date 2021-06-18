import { throttle } from './utils'

export const animateOnScroll = ({ selector }) => {
  console.log('animateOnScroll')

  const doStuffOnScroll = (e) => {
    console.log(e)
    console.log('fire')
  }

  window.addEventListener('scroll', throttle(doStuffOnScroll, 100))
}
