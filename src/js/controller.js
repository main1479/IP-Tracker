import 'core-js/stable';
import 'regenerator-runtime/runtime';
import map from 'leaflet';
import { async } from 'regenerator-runtime/runtime';
import * as model from './model.js';
import searchView from './views/searchView.js';
import mapView from './views/mapView.js';
// import 'leaflet/dist/';

const controlGetIP = async function () {
	try {
		// render spinner
		searchView.renderSpinner();
		// loading the IP
		const { ip } = await model.getIP();
		await model.getIPInfo(ip);

		// render data to the UI
		searchView.render(model.state);

		// render map
		const cords = [model.state.location.lat, model.state.location.lng];
		mapView.loadMap(cords);
	} catch (err) {
		console.error(err);
		searchView.renderError();
	}
};

const controlSearch = async function (ip) {
	try {
		// render spinner
		searchView.renderSpinner();

		// search Ip
		await model.getIPInfo(ip);

		// render data to the UI
		searchView.render(model.state);

		// render map
		const cords = [model.state.location.lat, model.state.location.lng];
		mapView.setMap(cords);
	} catch (err) {
		searchView.renderError('No IP address with your query');
		console.error(err);
	}
};

const init = function () {
	controlGetIP();

	searchView.addSearchHandler(controlSearch);
};

init();
