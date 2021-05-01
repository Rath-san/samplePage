import '../styles/main.scss'
import './app.js'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
