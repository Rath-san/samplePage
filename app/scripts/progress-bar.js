import gsap, { TimelineLite, Sine } from 'gsap'

export const progressAnim = ({ selector }) => {
  const progressBar = document.querySelector('.progress__bar')
  const progressBarFill = progressBar.querySelector('.progress__bar__fill')

  const progressBarText = document.querySelector('.progress__bar__text')

  const toText = progressBarText.dataset.textEnd

  const onCompleteTo = () => (progressBarText.innerHTML = toText)

  const tl = new TimelineLite({
    paused: true
    // repeat: -1,
    // yoyo: true
  })

  tl.fromTo(
    progressBarFill,
    {
      width: '0%'
    },
    {
      width: '100%',
      duration: 3,
      ease: Sine.easeInOut,
      onComplete: onCompleteTo
    }
  )

  return tl
}
