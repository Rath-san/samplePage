export const is_cached = (img_url) => {
  var imgEle = document.createElement('img')
  imgEle.src = img_url
  return imgEle.complete || imgEle.width + imgEle.height > 0
}

export const throttle = (func, timeFrame) => {
  var lastTime = 0
  return function (e) {
    var now = new Date()
    if (now - lastTime >= timeFrame) {
      func(e)
      lastTime = now
    }
  }
}
