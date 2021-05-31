// STYLES
import '../styles/main.scss';

// JS
import './app';

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
