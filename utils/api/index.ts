/** @format */
import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrl, getUrl } from './config';

import config from './config';

export type BackendResponse = {
	success: string;
	message?: string;
};

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10000,
		},
	},
});

export const apiClient = axios.create({
	baseURL: baseUrl,
});

apiClient.defaults.withCredentials = true;
apiClient.defaults.responseType = 'json';

// @ts-ignore
apiClient.defaults.headers = {
	common: {
		Accept: 'application/json',
	},
};
// @ts-ignore
apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
	if (config.url) {
		config.url = getUrl(config.url);
	}
	if (config.method?.toUpperCase() === 'POST') {
		config.headers = {
			...config.headers,
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		};
	}
	config.url = `api/admin/${config.url}`;

	return config;
});

apiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (error?.response?.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			await refreshToken();
			return apiClient(originalRequest);
		}

		if (error?.response?.status === 401 && location.pathname !== '/') {
			location.href = '/';
		}
		return Promise.reject(error);
	}
);

export function refreshToken() {
	return apiClient.post(config.auth.refreshToken);
}
