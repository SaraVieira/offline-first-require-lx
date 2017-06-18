/* global google */

import axios from 'axios';
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

const formatDate = date => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${day}/${monthIndex}/${year} ${hour}:${min}`;
};

export const getDate = date => formatDate(new Date(date));

export const initializeMap = (el, coords, content) => {
  const infowindow = new google.maps.InfoWindow({
    content,
  });
  const map = new google.maps.Map(el, {
    zoom: 16,
    center: coords,
  });
  const marker = new google.maps.Marker({ // eslint-disable-line
    position: coords,
    map,
  });
  infowindow.open(map, marker);
};
