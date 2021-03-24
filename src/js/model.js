import { API_CALL } from './helper.js';
import { API_URL, IP_URL } from './config.js';

export let state;

export const getIP = async function () {
	try {
		const data = await API_CALL(IP_URL);
		return data;
	} catch (err) {
		throw err;
	}
};

export const getIPInfo = async function (ip) {
	try {
		const data = await API_CALL(`${API_URL}${ip}`);
		state = data;
		console.log(data);
	} catch (err) {
		throw err;
	}
};
