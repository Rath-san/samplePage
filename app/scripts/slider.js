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

  sliderContainer.on('click', (e) => {
    const index = $(e.target).closest('.slick-slide').attr('data-slick-index')
    if (index) {
      sliderContainerBig.slick('slickGoTo', index)
      $('body').addClass('slider-visible')
      $('.sliderBig__wrapper').eq(0)
        .removeClass('hidden')
        .addClass('visible')
    }
  })

  $('#sliderBigClose').on('click', () => {
    $('body').removeClass('slider-visible')
    $('.sliderBig__wrapper').eq(0)
      .removeClass('visible')
      .addClass('hidden')
  })
}
