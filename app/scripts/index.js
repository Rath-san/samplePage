import '../styles/main.scss'
import './app.js'

import '../images/header/header_bg_1.jpg'
import '../images/header/header_bg_2.jpg'

// import './rgbKineticSlider-master/js/libs/imagesLoaded.pkgd.min.js'
// import './rgbKineticSlider-master/js/libs/pixi.min.js'
// import './rgbKineticSlider-master/js/libs/pixi-filters.min.js'
// import './rgbKineticSlider-master/js/libs/TweenMax.min.js'
// import './rgbKineticSlider-master/js/rgbKineticSlider.js'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
