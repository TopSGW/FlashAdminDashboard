/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';
import { RecordCountDailyType, TotalInfoProps } from 'components/Overview/type';
import {
	SalesGoalType,
	TopAffiliatedType,
	TopPairType,
} from 'components/Statistics/type';

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
export type RevenueMonthData = {
	month: number;
	amount: number;
};
export interface CommonDataInterface extends BackendResponse {
	data?: {
		topInfo: {
			totalSalse: TotalInfoProps;
			visitors: TotalInfoProps;
			totalOrders: TotalInfoProps;
			refunded: TotalInfoProps;
			totalEarned: TotalInfoProps;
		};
		revenue: RevenueMonthData[];
		topPair: TopAffiliatedType[] | TopPairType[];
		salesGoal: SalesGoalType;
	};
}
export interface SalesDataResponse extends BackendResponse {
	data?: {
		sales: RecordCountDailyType[];
	};
}
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
	return useQuery(
		[endpoint('commonInfo', payload.type, payload.date.toDateString())],
		() => fetchCommonInfo(payload)
	);
}

export function useSiteVisitors(payload: TopInfoType) {
	return useQuery(
		[endpoint('siteVisitors', payload.type, payload.date_type)],
		() => fetchSiteVisitors(payload)
	);
}

export function useSalesStatistic(payload: TopInfoType) {
	return useQuery(
		[endpoint('salesStatistic', payload.type, payload.date_type)],
		() => fetchSalesStatistic(payload)
	);
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

export function fetchCommonInfo(
	payload: CommonInfoType
): Promise<CommonDataInterface> {
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

export function fetchSalesStatistic(
	payload: TopInfoType
): Promise<SalesDataResponse> {
	return apiClient
		.get(config.statistic.salesStatistic, {
			params: payload,
		})
		.then((res) => res.data);
}
