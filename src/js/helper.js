import {TIMEOUT_SECOND} from './config.js';
const reqTimeout = async function (s) {
	return new Promise((_, reject) => {
		return setTimeout(() => {
			reject(`Request took too long! Timeout after ${s} seconds`);
		}, s * 1000);
	});
};

export const API_CALL = async function (url) {
	try {
		const fetchPromise = fetch(url);
		const res = await Promise.race([reqTimeout(TIMEOUT_SECOND), fetchPromise]);
		const data = await res.json();
		if (!res.ok) throw Error;

		return data;
	} catch (err) {
		throw err;
	}
};
