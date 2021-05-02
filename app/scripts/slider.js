import $ from 'jquery'
import 'slick-slider'

export const slider = () => {
  const sliderContainer = $('#slider')
  sliderContainer.slick({
    // normal options...
    // lazyLoad: 'progressive',
    infinite: false,
    slidesToShow: 2,
    centerMode: true,
    draggable: false
    // the magic
    // responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 2,
    //     infinite: false
    //   }
    // }
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     dots: true
    //   }
    // },
    // {
    //   breakpoint: 300,
    //   settings: 'unslick' // destroys slick
    // }
    // ]
  })

  const infoWrapperInteractiveClass = 'interactive'
  const infoWrapper = $('.info__wrapper')
  sliderContainer.on('dragstart', () => {
    infoWrapper.removeClass(infoWrapperInteractiveClass)
  })
  sliderContainer.on('touchstart', () => {
    infoWrapper.removeClass(infoWrapperInteractiveClass)
  })
  sliderContainer.on(
    'beforeChange',
    (event, slick, currentSlide, nextSlide) => {
      if (nextSlide > 0) {
        infoWrapper.removeClass(infoWrapperInteractiveClass)
      }
    }
  )
  sliderContainer.on('afterChange', (event, slick, currentSlide) => {
    if (currentSlide < 1) {
      infoWrapper.addClass(infoWrapperInteractiveClass)
    }
  })

  const sliderContainerBig = $('#sliderBig')
  sliderContainerBig.slick({
    dots: true
  })

  const animatedElements = $('.animated')
  const animationTime = 0.45
  const totalAnumationTime = animatedElements.length * animationTime

  sliderContainer.on('click', (e) => {
    const index = $(e.target).closest('.slick-slide').attr('data-slick-index')
    if (index) {
      sliderContainerBig.slick('slickGoTo', index)
      setTimeout(() => {
        $('body').addClass('slider-visible')
        $('.sliderBig__wrapper').eq(0).removeClass('hidden').addClass('visible')
      }, totalAnumationTime * 300)

      $.each(
        animatedElements,
        addDefferedAnimation('out', animationTime * 1000)
      )
    }
  })

  $('#sliderBigClose').on('click', () => {
    $('body').removeClass('slider-visible')
    $('.sliderBig__wrapper').eq(0).removeClass('visible').addClass('hidden')

    $.each(animatedElements, addDefferedAnimation('in', animationTime * 1000))
  })
}

const DIRECTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
}

const addDefferedAnimation = (inOrOut, durationMs = 1000) => (
  index,
  element
) => {
  const direction = $(element).attr('data-direction')
  const isIn = inOrOut === 'in'
  const isHorizontal =
    direction === DIRECTIONS.LEFT || direction === DIRECTIONS.RIGHT

  const offset = isIn ? '0px' : '10px'
  const opacity = isIn ? 1 : 0

  const transformation = `translate3d(
    ${
      isHorizontal
        ? direction === DIRECTIONS.RIGHT
          ? offset
          : '-' + offset
        : 0
    },
    ${
      !isHorizontal
        ? direction === DIRECTIONS.BOTTOM
          ? offset
          : '-' + offset
        : 0
    },
    ${offset}
  )`

  setTimeout(() => {
    element.style.transitionDuration = `${durationMs}ms`
    element.style.transitionProperty = 'opacity transform'
    element.style.opacity = opacity
    element.style.transform = transformation
  }, (durationMs * index) / 2)
}
