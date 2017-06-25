/* global google */
import fetchJsonp from 'fetch-jsonp';
import config from './config';

export const getEvents = () =>
  fetchJsonp(config.meetupApi)
    .then(resp => resp.json())
    .then(resp => resp.data);

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
  if (!el) {
    return;
  }
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
