export const isCached = (imgUrl) => {
  var imgEle = document.createElement('img')
  imgEle.src = imgUrl
  return imgEle.complete || imgEle.width + imgEle.height > 0
}

