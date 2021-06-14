export const paralax = ({
  selector,
  mouseContainer,
  offsetMultiplierX = 100,
  offsetMultiplierY = 100,
  initialPositionOffset = 0
}) => {
  const paralaxClass = 'paralax-item'
  const elementChildren = Array.from(selector.children)

  const hasParalaxClass = (node) => node.classList.contains(paralaxClass)

  const addClass = (node) => {
    if (!hasParalaxClass(node)) {
      node.classList.add(paralaxClass)
    }
  }

  const removeClass = (node) => {
    if (hasParalaxClass(node)) {
      node.classList.remove(paralaxClass)
    }
  }

  const parallax = (e) => {
    let _w = window.innerWidth / 2
    let _h = window.innerHeight / 2
    let _mouseX = e.clientX
    let _mouseY = e.clientY

    const getDepth = (level) => `translate3d(
        ${
          initialPositionOffset - ((_mouseX - _w) * level) / offsetMultiplierX
        }%,
        ${
          initialPositionOffset - ((_mouseY - _h) * level) / offsetMultiplierY
        }%, 0)
      `

    elementChildren.forEach((child) => {
      addClass(child)
      const level = child.dataset.level
      child.style.transform = getDepth(level)
    })
  }

  const resetTransition = (node) => {
    node.style.transform = `translate(${initialPositionOffset}%, ${initialPositionOffset}%)`
  }

  // Add event listener
  mouseContainer.addEventListener('mousemove', parallax)
  mouseContainer.addEventListener('mouseleave', () => {
    elementChildren.forEach((node) => {
      removeClass(node)
      resetTransition(node)
    })
  })
}
