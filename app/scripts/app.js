'use strict'

import './beforeafter'
import './menu'
import { pagination } from './pagination'
import { prevs } from './prevs-section'
import { lazyAnim } from './lazy-animation'
import { lazyImages } from './lazy-images'

const headerComp = () => {
  const header = document.querySelector('.header')
  const headerImages = Array.from(header.querySelectorAll('img'))

  const imagesresolved = Promise.all(
    headerImages.map(
      (image) =>
        new Promise((resolve, reject) => {
          image.onload = () => {
            resolve()
          }
        })
    )
  )

  imagesresolved.then(() => {
    header.classList.add('animated-in')
  }).catch(e => {
    console.log(e)
  })

  headerImages.forEach((img) => {
    img.src = img.dataset.src
    img.srcset = img.dataset.srcset
  })
}

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 4
    const paginationElements = document.querySelectorAll('.pagination')
    const prevsElement = document.getElementById('prContainer')

    const previews = prevs({
      selector: prevsElement,
      itemsCount: itemsPerPage
    })

    previews.init()

    const paginations = pagination({
      selectors: paginationElements,
      itemsTotal: previews.getItemsCount(),
      itemsPerPage,
      callback: previews.repaint
    })

    paginations.init()

    lazyAnim()

    $('.ba-slider').each(function () {
      $(this).beforeAfter('.img-lazy')
    })

    lazyImages()
    headerComp()
  })
})()
