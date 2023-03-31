/** @format */

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import urlConfig, { baseUrl } from './config';

export function getRequest(
	url: string,
	params?: Record<string, string>,
	cookies?: RequestCookie[]
) {
	let configUrl: string = '';
	let urlStr: string = '';
	let cookie: string = '';
	if (params) {
		urlStr = new URLSearchParams(params).toString();
		urlStr = '?' + urlStr;
	}
	configUrl = baseUrl + '/api/admin/' + url + urlStr;
	if (cookies) {
		cookie = convertStringFromCookies(cookies);
	}
	return fetch(configUrl, {
		method: 'GET',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			cookie: cookie,
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
		credentials: 'same-origin',
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

export function convertStringFromCookies(cookies: RequestCookie[]) {
	let result = '';

	for (const cookie of cookies) {
		result += cookie.name + '=' + cookie.value + '; ';
	}
	result = result.slice(0, -1);
	result = result.slice(0, -1);

	return result;
}
