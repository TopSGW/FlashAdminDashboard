/** @format */

import urlConfig, { baseUrl } from './config';

export function getRequest(url: string, params?: Record<string, string>) {
	let configUrl: string = '';
	let urlStr: string = '';
	if (params) {
		urlStr = new URLSearchParams(params).toString();
		urlStr = '?' + urlStr;
	}
	configUrl = baseUrl + '/api/admin/' + url + urlStr;

	return fetch(configUrl, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res: any): any => {
			console.log(res.ok);
			if (res.ok) {
				return true;
			}
			if (res.status === 403) {
				return getRequest(urlConfig.auth.refreshToken);
			}
			if (url === urlConfig.auth.refreshToken && res.status === 401) {
				return false;
			}
			throw new Error('Something went wrong.');
		})
		.catch((error: any) => {
			console.log(url + ' error:', error);
			throw new Error('Something went wrong');
		});
}
export function postRequest(url: string, params?: Record<string, any>) {
	return fetch(url, {
		method: 'POST',
		body: new URLSearchParams(params),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		credentials: 'include',
	}).then((response) => response.json());
}

export function postFile(
	url: string,
	fileSelector: any,
	params?: Record<string, any>
) {
	const formData = makeFormData(params);
	const fileField = document.querySelector(fileSelector);
	formData.append('file', fileField.files[0]);
	return fetch(url, {
		method: 'POST',
		body: formData,
	}).then((response) => response.json());
}

export function makeFormData(params?: Record<string, any>) {
	const formData = new FormData();
	if (params) {
		for (const [key, value] of Object.entries(params)) {
			formData.append(key, value);
		}
	}
	return formData;
}
