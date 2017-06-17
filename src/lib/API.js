import axios from 'axios';
import moment from 'moment';
import { get } from 'lodash';

export const getEvents = () =>
  axios({
    method: 'get',
    url: 'https://api.meetup.com/require-lx/events',
    params: {
      key: '6161504e80005a355e671d2fb5d2e',
      page: 20,
      'photo-host': 'public',
      sign: true,
    },
  }).then(get('data'));

export const getDate = date => {
  const FormattedDate = new Date(date);
  return moment(FormattedDate).format('DD/MM/YY HH:MM');
};
