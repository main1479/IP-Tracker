import View from './view.js';
import locationPin from 'url:../../images/icon-location.svg';
class Map {
	_map;
	_mapZoomLevel = 13;
	icon = L.icon({
		iconUrl: locationPin,
		iconSize: [38, 95],
		// iconAnchor: [22, 94],
		// popupAnchor: [-3, -76],
		// shadowUrl: 'my-icon-shadow.png',
		// shadowSize: [68, 95],
		// shadowAnchor: [22, 94],
	});

	// L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	loadMap(data) {
		if (!data) return;

		this._map = L.map('map').setView(data, this._mapZoomLevel);

		L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
			maxZoom: 20,
			subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
		}).addTo(this._map);

		L.marker(data, { icon: this.icon }).addTo(this._map);
	}

	setMap(data) {
		this._map.setView(data, this._mapZoomLevel);
      
		L.marker(data, { icon: this.icon }).addTo(this._map);
	}
}

export default new Map();
