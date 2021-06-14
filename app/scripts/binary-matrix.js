export const glowingBinaryMatrix = ({
  canvas,
  fontSize,
  textColor,
  bgColor,
  speed,
  text
}) => {
  // Returns a random integer between min (included) and max (included)
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // setup
  const matrixHeight = canvas.parentElement.clientHeight
  let matrixWidth = window.innerWidth
  canvas.height = matrixHeight
  canvas.width = matrixWidth

  const resize = () => {
    matrixWidth = window.innerWidth
  }

  window.addEventListener('resize', resize)

  let charSet = text.split('')

  const columns = matrixWidth / fontSize
  const rows = matrixHeight / fontSize

  canvas.offscreenCanvas = document.createElement('canvas')
  canvas.offscreenCanvas.width = canvas.width
  canvas.offscreenCanvas.height = canvas.height

  const ctx = canvas.offscreenCanvas.getContext('2d', { alpha: false })
  ctx.font = fontSize + 'px Proxima'

  const drops = []
  for (let column = 0; column < columns; column++) {
    drops[column] = getRandom(0, rows)
  }

  const ctxOriginal = canvas.getContext('2d')

  const rain = () => {
    // console.log(drops);
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (var column = 0; column < drops.length; column++) {
      ctx.fillStyle = textColor
      // pick rundwon char
      var char = charSet[getRandom(0, charSet.length - 1)]
      // Draw the char
      ctx.fillText(char, column * fontSize, drops[column] * fontSize)
      // Randomly reset drop back to top row
      if (Math.random() > 0.98) {
        drops[column] = 0
      }

      drops[column]++
    }
    ctxOriginal.drawImage(canvas.offscreenCanvas, 0, 0)
  }

  const run = () => {
    // rain()
    setInterval(rain, speed)
    // window.requestAnimationFrame(run)
  }

  run()
  // window.requestAnimationFrame(run)
}
