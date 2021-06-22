export const slider = ({ node, slideDuration = 4000 }) => {
  const slider = node
  const sliderItems = Array.from(node.children)

  console.log(slider)
  console.log(sliderItems)

  let previousSlideIndex = 1
  let activeSlideIndex = 0

  const changeSlide = () => {
    sliderItems.forEach((element) => {
      element.classList.remove('active')
    })
    sliderItems[activeSlideIndex].classList.add('active')
  }

  const sliderItemsLength = sliderItems.length

  const run = () => {
    setTimeout(() => {
      // console.log(activeSlideIndex)
      if (activeSlideIndex === sliderItemsLength - 1) {
        activeSlideIndex = 0
      } else {
        activeSlideIndex += 1
      }

      // if (previousSlideIndex === sliderItemsLength - 1) {
      //   previousSlideIndex =
      // } else {
      //   activeSlideIndex -= 1
      // }

      changeSlide()
      run()
    }, slideDuration)
  }

  run()
}
