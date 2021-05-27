export const is_cached = (img_url) => {
  var imgEle = document.createElement('img')
  imgEle.src = img_url
  return imgEle.complete || imgEle.width + imgEle.height > 0
}
