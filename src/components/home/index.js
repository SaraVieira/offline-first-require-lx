import { h, Component } from 'preact';
import style from './style.css';
import { getEvents, getDate } from '../../lib/utils';
import logo from '../../assets/logo.jpeg';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      nextEvent: [],
    };
  }

  componentWillMount() {
    getEvents().then(events => this.setState({ nextEvent: events[0] }));
  }

  render(props, { nextEvent }) {
    return (
      <div className={style.home}>
        <div className={style.event}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.newEvent}>
            <h1> Next Event: </h1>
            <div className={style.details}>
              <a
                href={nextEvent.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {nextEvent.name}
              </a>
              <time>{getDate(nextEvent.time)}</time>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
