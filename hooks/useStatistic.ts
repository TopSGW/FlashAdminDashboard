/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { toast } from 'react-toastify';

export enum STATISTIC {
	FLASH = 'flash',
	AFFILIATOR = 'affiliator',
}

export enum DURING {
	YEAR = 'Yearly',
	MONTH = 'Monthly',
}

export type TopInfoType = {
	type: STATISTIC;
	date_type: DURING;
};

export type CustomerCountryType = {
	type: STATISTIC;
	year: number;
	month: number;
	country: string;
};
export type CommonInfoType = {
	type: STATISTIC;
	date: Date;
};
const endpoint = (url: string, ...args: Array<any>) =>
	`${url}/${args.join('/')}`;
export function useTopInfo(payload: CommonInfoType) {
	const { isLoading, data } = useQuery(
		[endpoint('topInfo', payload.type, payload.date.toDateString())],
		() => fetchTopInfo(payload)
	);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}

export function useCustomerByCountry(payload: CustomerCountryType) {
	const { isLoading, data } = useQuery(
		[
			endpoint(
				'customerByCountry',
				payload.type,
				payload.year,
				payload.month,
				payload.country
			),
		],
		() => fetchCustomerByCountry(payload)
	);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}

export function useCommonInfo(payload: CommonInfoType) {
	const { isLoading, data } = useQuery(
		[endpoint('commonInfo', payload.type, payload.date.toDateString())],
		() => fetchCommonInfo(payload)
	);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}

export function useSiteVisitors(payload: TopInfoType) {
	const { isLoading, data } = useQuery(
		[endpoint('siteVisitors', payload.type, payload.date_type)],
		() => fetchSiteVisitors(payload)
	);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}

export function useSalesStatistic(payload: TopInfoType) {
	const { isLoading, data } = useQuery(
		[endpoint('salesStatistic', payload.type, payload.date_type)],
		() => fetchSiteVisitors(payload)
	);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}

export function fetchTopInfo(payload: CommonInfoType) {
	return apiClient
		.get(config.statistic.getTopInfo, {
			params: payload,
		})
		.then((res) => res.data);
}

export function fetchCustomerByCountry(payload: CustomerCountryType) {
	return apiClient
		.get(config.statistic.getCustomerByCountry, {
			params: payload,
		})
		.then((res) => res.data);
}

export function fetchCommonInfo(payload: CommonInfoType) {
	return apiClient
		.get(config.statistic.getCommonInfo, {
			params: payload,
		})
		.then((res) => res.data);
}

export function fetchSiteVisitors(payload: TopInfoType) {
	return apiClient
		.get(config.statistic.siteVisitors, {
			params: payload,
		})
		.then((res) => res.data);
}

export function fetchSalesStatistic(payload: TopInfoType) {
	return apiClient
		.get(config.statistic.salesStatistic, {
			params: payload,
		})
		.then((res) => res.data);
}
