import { isCached } from './utils'

const repaintBASlider = () => {
  $('#prContainer .ba-slider').each(function () {
    $(this).beforeAfter('.img-lazy')
  })
}

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

const convertToPairData = (nodes) => nodes.map((dataPair) => {
  const name = dataPair.id

  return {
    name,
    after: dataPair.children[0],
    before: dataPair.children[1]
  }
})

export const prevs = ({ selector, itemsCount }) => {
  const mainContainer = selector
  const rawchildren = Array.from(mainContainer.children)
  const nameImgPairData = convertToPairData(rawchildren)

  const getItemsCount = () => rawchildren.length

  const repaint = (currentPage) => {
    const currentIndexInNames = (currentPage - 1) * itemsCount
    const newPageItems = [...nameImgPairData].splice(currentIndexInNames, itemsCount)
    if (newPageItems.length < itemsCount) {
      newPageItems.push(...Array(itemsCount - newPageItems.length))
    }
    newPageItems.forEach(repaintItem)
  }

  const repaintItem = (item, index) => {
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

    repaintBASlider()

    // this needs to be changed
    const images = mainContainer.querySelectorAll('.img-lazy')
    images.forEach((image) => {
      const img = image.querySelector('img')
      const placeholder = image.querySelector('.placeholder')

      if (isCached(img.dataset.src)) {
        image.classList.add('img-cached')
      } else {
        image.classList.remove('img-cached')
      }

      img.onload = () => {
        img.style.opacity = 1
        placeholder.style.opacity = 0
      }

      img.src = img.dataset.src
      img.srcset = img.dataset.srcset
    })
  }

  const render = () => {
    mainContainer.innerHTML = ''
    for (let index = 0; index < itemsCount; index++) {
      const currentItem = nameImgPairData[index]
      mainContainer.innerHTML += template(
        currentItem.name,
        index,
        currentItem.before,
        currentItem.after
      )
    }
  }

  const init = () => {
    render()
    repaintBASlider()
  }

  return {
    init,
    repaint,
    getItemsCount
  }
}
