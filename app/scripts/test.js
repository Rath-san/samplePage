const names = [
  'Ash',
  'Bold',
  'Brisk',
  'Dawn',
  'Dingy',
  'Eclipse',
  'Fresh',
  'Heated',
  'Juicy',
  'Lucid',
  'Luminous',
  'Luscious',
  'Oldie',
  'Pinup',
  'Radiant',
  'Scorch',
  'Shaded',
  'Soot',
  'Sour',
  'Spry',
  'Tarnished',
  'Velvet',
  'Vibrant',
  'Vigorous',
  'Washy'
]

const SUFFIXES = {
  before: '_before',
  after: '_after'
}

const FILE_EXTENSIONS = {
  jpg: '.jpg',
  png: '.png'
}

const IMAGEROOT = 'images/preview/'
// 'https://s3.motionvfx.com/mvfxpublic/products/templates/1311/media/'

const getImageUrl = (name, suffix, ext = FILE_EXTENSIONS.jpg) => {
  return `${IMAGEROOT}${name}${suffix}${ext}`;
}

const itemsPerPage = 4
const pagesTotal = Math.ceil(names.length / itemsPerPage)
let currentPage = 1

const mainContainer = document.getElementById('prContainer');

const template = (name, index) => {
return `
  <div class="col-md-6" id="prBA${index}">
      <h3 id="title${index}">${name}</h3>
      <div class="prBeforeAfter">
          <div class="ba-slider">
            <img id="imgAfter${index}" loading="lazy" src="${getImageUrl(name, SUFFIXES.after)}" alt="" />
            <div class="resize">
              <img id="imgBefore${index}" loading="lazy" src="${getImageUrl(name, SUFFIXES.before)}" alt="" />
            </div>
            <span class="handle">
              <img id="handleImg1" loading="lazy" src="https://s3.motionvfx.com/mvfxpublic/images/mlut/filmwedding/handle.png?1" alt="" />
            </span>
          </div>
      </div>
      <h4>LOG FILE</h4>
      <h4 class="right">WITH LUT</h4>
  </div>
`
}

const paginationContainer = document.getElementById('pagination');

const init =  () => {
  for (let index = 0; index < itemsPerPage; index++) {
    mainContainer.innerHTML += template(names[index], index)
  }
  
  const paginationPrevControl = paginationContainer.querySelector('#prevPage');
  const paginationNextControl = paginationContainer.querySelector('#nextPage');

  paginationPrevControl.addEventListener('click', prevPage)
  paginationNextControl.addEventListener('click', nextPage)

  changePoniter()
}

const prevPage = () => {
  const nextNumber = currentPage - 1
  nextNumber < 1
    ? currentPage = pagesTotal
    : currentPage = nextNumber
  changePoniter()
  onChangePointer()
}

const nextPage = () => {
  const nextNumber = currentPage + 1
  nextNumber > pagesTotal
    ? currentPage = 1
    : currentPage = nextNumber
  changePoniter()
  onChangePointer()
}

const onChangePointer = () => {

  const currentIndexInNames = (currentPage - 1) * itemsPerPage
  const newPageNames = [...names].splice(currentIndexInNames, itemsPerPage)

  if (newPageNames.length < itemsPerPage) {
    newPageNames.push(...Array(itemsPerPage - newPageNames.length))
  }

  newPageNames.forEach((name, index) => {
    repaint(index, name);
  })
}

const pageNumber = paginationContainer.querySelector('#paginationPointer');

const changePoniter = () => {
  paginationPointer.innerHTML = `Page ${currentPage}/${pagesTotal}`
}

const repaint = (index, name) => {

  const container = mainContainer.querySelector(`#prBA${index}`)
  const imageBefore = container.querySelector(`#imgBefore${index}`)
  const prWrapper = container.querySelector('.prBeforeAfter')

  if (!name) {
    prWrapper.style.height = `${imageBefore.height}px`
    container.style.display = 'none'
    return;
  } else {
    container.style.display = 'block'
  }

  const imageAfter = container.querySelector(`#imgAfter${index}`)
  const title = container.querySelector(`#title${index}`)

  title.innerHTML = name

  imageBefore.style.opacity = 0
  imageAfter.style.opacity = 0

  imageBefore.addEventListener('load', function() {
    const bindedOnLoad = onLoad.bind(this)
    bindedOnLoad();
    prWrapper.style.height = 'auto'
  })

  imageAfter.addEventListener('load', onLoad)

  imageBefore.src = getImageUrl(name, SUFFIXES.before)
  imageAfter.src =  getImageUrl(name, SUFFIXES.after)
}

function onLoad() {
  this.style.opacity = 1
}

init();


// checking intersection observer
// const callback = (entries, observer) => {
//   console.log('callback');
//   console.log(entries[0]);
// }

// let options = {
//   root: null,
//   threshold: 1.0,
//   rootMargin: '0px',
// }

// let observer = new IntersectionObserver(callback, options);

// observer.observe(document.querySelector('#pagination'))

// Animating sections
const animatedSections = document.querySelectorAll('.animated');

console.log(animatedSections);

const lazyAnimate = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('lazy anim');
        entry.target.classList.add('animated-in')

        observer.disconnect()
      }
    })
  }, {
    threshold: .01
  });

  io.observe(target);
}

animatedSections.forEach(lazyAnimate)