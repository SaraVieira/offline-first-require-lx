import { h, Component } from 'preact';
import { Router } from 'preact-router';
import '../style/index.css';

import Header from './header';
import Home from './home';
import Events from './events';

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div
        id="app"
        style={{
          height: '100%',
        }}
      >
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Events path="/events" />
        </Router>
      </div>
    );
  }
}
