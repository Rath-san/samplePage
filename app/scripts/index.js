// STYLES
// import 'splitting/dist/splitting.css'
// import 'splitting/dist/splitting-cells.css'
import '../styles/main.scss'

// JS
import './app'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
