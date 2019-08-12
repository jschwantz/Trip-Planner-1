const mapbox = require('mapbox-gl');

const buildMarker = (type, coordinates) => {
  const urls = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }


  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = urls[type];

  //assume coordinates is an array of length 2
  new mapbox.Marker(markerDomEl).setLngLat(coordinates).addTo(map);
}

module.exports = buildMarker;
