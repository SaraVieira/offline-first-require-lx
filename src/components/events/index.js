import { h, Component } from 'preact';
import Markup from 'preact-markup';
import axios from 'axios';
import style from './style.css';
import { getEvents, getDate, initializeMap } from '../../lib/API';

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      loading: true,
    };
  }

  componentDidMount() {
    getEvents().then(events =>
      this.setState({ events: events.data, loading: false })
    );
  }

  componentWillUnmount() {}

  render(props, { events, loading }) {
    return (
      <div className={style.events}>
        {!loading &&
          events.map(event =>
            <div className={style.event}>
              <div className={style.desc}>
                <h2>{event.name}</h2>
                <time>{getDate(event.time)}</time>
                <Markup markup={event.description} />
              </div>
              <div>
                <div
                  className={style.map}
                  ref={ref =>
                    initializeMap(
                      ref,
                      {
                        lat: event.venue ? event.venue.lat : event.group.lat,
                        lng: event.venue ? event.venue.lon : event.group.lon,
                      },
                      event.venue ? event.venue.name : event.group.name
                    )}
                />
              </div>
            </div>
          )}
      </div>
    );
  }
}
