import {is_cached} from './utils';

const mainContainer = document.getElementById('prContainer')

const repaintBASlider = () => $('#prContainer .ba-slider').each(function() {
  $(this).beforeAfter('.img-lazy')
})

// images
if (!mainContainer) {
}
const rawChildNodes = Array.from(mainContainer.childNodes);

const nameImgPairData = rawChildNodes.map(dataPair => {
  const name = dataPair.id

  return {
    name,
    after: dataPair.childNodes[0],
    before: dataPair.childNodes[1],
  }
})

const SUFFIXES = {
  before: '_before',
  after: '_after'
}

const FILE_EXTENSIONS = {
  jpg: '.jpg',
  png: '.png'
}

const IMAGEROOT = 'images/preview'

const getImageUrl = (name, suffix, ext = FILE_EXTENSIONS.jpg) => {
  return `${IMAGEROOT}${name}${suffix}${ext}`
}

const itemsPerPage = 4
const pagesTotal = Math.ceil(rawChildNodes.length / itemsPerPage)
let currentPage = 1

const template = (name, index, imgBefore, imgAfter) => {
  return `
    <div class="col-md-6" id="prBA${index}">
        <h3 id="title${index}" class="prev__title">${name}</h3>
        <div class="prBeforeAfter">
            <div class="ba-slider">
              ${imgAfter.outerHTML}
              <div class="resize">
                ${imgBefore.outerHTML}
              </div>
              <span class="handle">
                <img id="handleImg1" loading="lazy" src="https://s3.motionvfx.com/mvfxpublic/images/mlut/filmwedding/handle.png?1" alt="" />
              </span>
            </div>
        </div>
        <h4 class="prev__label">LOG FILE</h4>
        <h4 class="prev__label right">WITH LUT</h4>
    </div>
  `
}

const paginationContainer = document.getElementById('pagination')

const init = () => {
  mainContainer.innerHTML = ''
  for (let index = 0; index < itemsPerPage; index++) {

    const currentItem = nameImgPairData[index]
    mainContainer.innerHTML += template(
      currentItem.name,
      index,
      currentItem.before,
      currentItem.after
    )
  }

  repaintBASlider()

  const paginationPrevControl = paginationContainer.querySelector('#prevPage')
  const paginationNextControl = paginationContainer.querySelector('#nextPage')

  paginationPrevControl.addEventListener('click', prevPage)
  paginationNextControl.addEventListener('click', nextPage)

  changePoniter()
}

const prevPage = () => {
  const nextNumber = currentPage - 1
  nextNumber < 1 ? (currentPage = pagesTotal) : (currentPage = nextNumber)
  changePoniter()
  onChangePointer()
}

const nextPage = () => {
  const nextNumber = currentPage + 1
  nextNumber > pagesTotal ? (currentPage = 1) : (currentPage = nextNumber)
  changePoniter()
  onChangePointer()
}

const onChangePointer = () => {
  const currentIndexInNames = (currentPage - 1) * itemsPerPage
  const newPageItems = [...nameImgPairData].splice(currentIndexInNames, itemsPerPage)

  if (newPageItems.length < itemsPerPage) {
    newPageItems.push(...Array(itemsPerPage - newPageItems.length))
  }

  newPageItems.forEach(repaint);
}

const pageNumber = paginationContainer.querySelector('#paginationPointer')

const changePoniter = () => {
  paginationPointer.innerHTML = `Page ${currentPage}/${pagesTotal}`
}

const repaint = (item, index) => {
  const container = mainContainer.querySelector(`#prBA${index}`)
  if (!item || !item.name) {
    container.style.display = 'none'
    return
  } else {
    container.style.display = 'block'
  }

  const imageBefore = container.querySelector('#before')
  const imageAfter = container.querySelector('#after')

  imageBefore.outerHTML = item.before.outerHTML
  imageAfter.outerHTML = item.after.outerHTML

  const title = container.querySelector(`#title${index}`)
  title.innerHTML = item.name

  repaintBASlider();

  const images = mainContainer.querySelectorAll('.img-lazy')
  images.forEach((image) => {

    const img = image.querySelector('img')
    const placeholder = image.querySelector('.placeholder')

    if (is_cached(img.dataset.src)) {
      image.classList.add('img-cached')
    }

    img.onload = () => {
      img.style.opacity = 1
      placeholder.style.opacity = 0;
    }

    img.src = img.dataset.src
    img.srcset = img.dataset.srcset
  })

}

init()

const callBASlider = function () {
  $('.ba-slider').each(function () {
    $(this).beforeAfter('.img-lazy')
  })
}

// Call & init
$(document).ready(callBASlider)
