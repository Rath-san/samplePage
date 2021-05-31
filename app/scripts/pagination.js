export const pagination = ({
  selectors,
  itemsPerPage,
  itemsTotal,
  callback
}) => {
  let currentPage = 1
  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage)

  const nodePointers = []

  const changePoniter = () => {
    nodePointers.forEach(element => {
      element.innerHTML = `Page ${currentPage}/${pagesTotal}`
    })
    onPageChange()
  }

  const changePage = (pageNum) => {
    const nextNumber = pageNum

    if (nextNumber < 1) {
      currentPage = pagesTotal
    } else if (nextNumber > pagesTotal) {
      currentPage = 1
    } else {
      currentPage = nextNumber
    }

    changePoniter()
  }

  const prevPage = () => {
    const nextNumber = currentPage - 1
    changePage(nextNumber)
  }

  const nextPage = () => {
    const nextNumber = currentPage + 1
    changePage(nextNumber)
  }

  let onPageChange = () => {
    if (callback) {
      callback(currentPage)
    }
  }

  const setupListeners = (node) => {
    const isPrevControl = Object.keys(node.dataset)[0] === 'prev'
    node.addEventListener('click', isPrevControl ? prevPage : nextPage)
  }

  const init = () => {
    selectors.forEach(s => {
      nodePointers.push(s.querySelector('.pagination-pointer'))
      s.querySelectorAll('.pagination-control').forEach(control => {
        setupListeners(control)
      })
    })
    changePoniter()
  }

  const getCurrentPage = () => currentPage

  return {
    init,
    getCurrentPage,
    changePage,
    prevPage,
    nextPage
  }
}
