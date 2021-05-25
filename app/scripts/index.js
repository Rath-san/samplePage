// STYLES
import '../styles/main.scss';

// JS
import './prevs-section';
import './lazy-animation';
import './lazy-images';

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
