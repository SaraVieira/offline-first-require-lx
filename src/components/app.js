import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import '../style/index.css';

import Loading from './Loading';
import Header from './header';
import Footer from './footer';
import Home from './home';

export default class App extends Component {
  getEvents() {
    return System.import('./events').then(module => module.default);
  }
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
          <AsyncRoute
            path="/events"
            component={this.getEvents}
            loading={() => <Loading />}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}
