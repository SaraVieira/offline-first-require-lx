// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './pwa';

let root;
function init() {
  const App = require('./components/app').default; // eslint-disable-line global-require
  root = render(<App />, document.getElementById('root'), root);
}
// in development, set up HMR:
if (module.hot) {
  require('preact/devtools'); // eslint-disable-line global-require
  module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
